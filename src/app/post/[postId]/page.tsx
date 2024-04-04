import styles from './post-page.module.css'
import { getPostData, commentsData } from '@/mocks/postsData';
import Post from '@/components/Post';
import Comment from '@/components/Comment';
interface PostPageProps {
  params: {
    postId: string
  }
}
interface CommentProps {
    id: number,
    userId: number,
    username: string,
    time: string,
    text: string,
    userImage: string,
}
export default function PostPage({ params }:PostPageProps) {
  const { postId } = params
  const postData = getPostData(postId)
  if (!postData) {
    return <p>Post not found</p>
  }
  const renderComments = (comments: CommentProps[]) => {
    if (comments.length) {
      return comments.map((comment) => (
        <Comment key={comment.id} commentData={comment}/>
      ))
    }
    return null
  }
  return (
    <div className={styles.postPageContainer}>
        <Post post={postData}/>
        <p>
          Comments
        </p>
        <div className={styles.commentsContainer}>
          {renderComments(commentsData)}
        </div>
    </div>
  );
}
