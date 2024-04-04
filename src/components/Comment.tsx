import styles from './comment.module.css'
import Image from 'next/image';
import Link from 'next/link';

interface CommentProps {
  commentData: {
    id: number,
    userId: number,
    username: string,
    time: string,
    text: string,
    userImage: string,
  }
}

export default function Comment({ commentData }: CommentProps) {
  return (
    <div key={commentData.id} className={styles.commentContainer}>
        <div className={styles.userInfo}>
            <div className={styles.userImage}>
              <Image src={commentData.userImage} fill objectFit='cover' alt='Profile picture'/>
            </div>
            <div className={styles.postUserData}>
                <Link href={`/profile/${commentData.userId}`} className={`${styles.postUsername} ${styles.link}`}>
                  {commentData.username}
                </Link>
                <p className={styles.commentTime}>{commentData.time}</p>
            </div>
        </div>
        <p className={styles.comment}>{commentData.text}</p>
    </div>
  );
}
