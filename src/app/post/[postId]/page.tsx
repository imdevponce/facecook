import styles from './post-page.module.css'
import { getPostData } from '@/mocks/postsData';
interface PostPageProps {
  params: {
    postId: string
  }
}
export default function PostPage({ params }:PostPageProps) {
  const { postId } = params
  const postData = getPostData(postId)
  console.log(postData)
  return (
    <div className={styles.postPageContainer}>
        Post Page
    </div>
  );
}
