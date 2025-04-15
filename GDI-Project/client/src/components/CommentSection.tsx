import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Send, MessageCircle, Pencil, Trash2 } from "lucide-react";

interface CommentProps {
  stepId: number;
  userId?: number; // Optional, for logged-in users
}

interface Comment {
  id: number;
  stepId: number;
  userId?: number;
  content: string;
  userEmail?: string;
  userName?: string;
  isAnonymous: boolean;
  createdAt: string;
  updatedAt: string;
}

const CommentSection: React.FC<CommentProps> = ({ stepId, userId }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newComment, setNewComment] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState('');

  // Fetch comments for this step
  const { data, isLoading, isError } = useQuery<{ comments: Comment[] }>({
    queryKey: [`/api/comments/step/${stepId}`],
  });

  const submitComment = async () => {
    if (!newComment.trim()) {
      toast({
        title: "Error",
        description: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const commentData = {
        stepId,
        userId,
        content: newComment,
        userEmail: isAnonymous ? userEmail : undefined,
        userName: isAnonymous ? userName : undefined,
        isAnonymous
      };

      await apiRequest('POST', '/api/comments', commentData);
      
      // Invalidate query to refetch comments
      queryClient.invalidateQueries({ queryKey: [`/api/comments/step/${stepId}`] });
      
      // Reset form
      setNewComment('');
      
      toast({
        title: "Success",
        description: "Your comment has been submitted",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit comment",
        variant: "destructive",
      });
      console.error("Comment submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditComment = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setEditContent(comment.content);
  };

  const saveEditedComment = async (id: number) => {
    if (!editContent.trim()) {
      toast({
        title: "Error",
        description: "Comment cannot be empty",
        variant: "destructive",
      });
      return;
    }

    try {
      await apiRequest('PATCH', `/api/comments/${id}`, { content: editContent });
      
      // Invalidate query to refetch comments
      queryClient.invalidateQueries({ queryKey: [`/api/comments/step/${stepId}`] });
      
      // Reset edit state
      setEditingCommentId(null);
      setEditContent('');
      
      toast({
        title: "Success",
        description: "Your comment has been updated",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update comment",
        variant: "destructive",
      });
      console.error("Comment update error:", error);
    }
  };

  const deleteComment = async (id: number) => {
    if (!confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    try {
      await apiRequest('DELETE', `/api/comments/${id}`, undefined);
      
      // Invalidate query to refetch comments
      queryClient.invalidateQueries({ queryKey: [`/api/comments/step/${stepId}`] });
      
      toast({
        title: "Success",
        description: "Comment deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete comment",
        variant: "destructive",
      });
      console.error("Comment deletion error:", error);
    }
  };

  return (
    <div className="mt-8 border-t pt-6">
      <div className="flex items-center mb-4">
        <MessageCircle className="text-[#169b62] mr-2" size={20} />
        <h3 className="text-lg font-medium">Comments & Feedback</h3>
      </div>
      
      {/* Comments list */}
      <div className="space-y-4 mb-6">
        {isLoading ? (
          <div className="flex justify-center p-4">
            <Loader2 className="h-6 w-6 animate-spin text-[#169b62]" />
          </div>
        ) : isError ? (
          <div className="text-center text-red-500 p-4">
            Failed to load comments
          </div>
        ) : data?.comments?.length === 0 ? (
          <div className="text-center text-gray-500 p-4">
            No comments yet. Be the first to share your thoughts!
          </div>
        ) : (
          data?.comments?.map((comment: Comment) => (
            <Card key={comment.id} className="bg-white">
              <CardHeader className="py-3 px-4 flex flex-row items-start justify-between space-y-0">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback className="bg-[#169b62]/20 text-[#169b62]">
                      {comment.userName 
                        ? comment.userName.substring(0, 2).toUpperCase() 
                        : comment.isAnonymous 
                          ? "AN" 
                          : "U"
                      }
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm font-medium">
                      {comment.userName || (comment.isAnonymous ? "Anonymous User" : "User")}
                    </CardTitle>
                    <p className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                {/* Only show edit/delete buttons if this is the user's comment */}
                {userId === comment.userId && (
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" onClick={() => handleEditComment(comment)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteComment(comment.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="py-2 px-4">
                {editingCommentId === comment.id ? (
                  <div className="space-y-2">
                    <Textarea 
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="min-h-[80px]"
                    />
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingCommentId(null)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => saveEditedComment(comment.id)}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm">{comment.content}</p>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
      
      {/* Comment form */}
      <Card className="bg-[#169b62]/5 border-dashed">
        <CardContent className="p-4">
          <div className="space-y-4">
            <Textarea
              placeholder="Share your thoughts, questions, or suggestions about this step..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px] resize-none"
            />
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                  className="mr-2"
                />
                <label htmlFor="anonymous" className="text-sm">Comment anonymously</label>
              </div>
              
              {isAnonymous && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium mb-1 block">Name (optional)</label>
                    <Input
                      placeholder="Your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1 block">Email (optional)</label>
                    <Input
                      placeholder="Your email"
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <Button 
                disabled={isSubmitting || !newComment.trim()} 
                onClick={submitComment}
                className="bg-[#169b62] hover:bg-[#0d7c4d]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Comment
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentSection;