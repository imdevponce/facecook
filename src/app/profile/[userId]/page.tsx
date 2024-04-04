import styles from './profile.module.css'
import Image from 'next/image';
import { getUserData }from '@/mocks/usersData'
interface ProfileProps {
  params: {
    userId: string
  }
}
export default function ProfilePage({ params }: ProfileProps ){
  const { userId } = params
  const userData = getUserData(userId)
  return (
    <div className={styles.profileContainer}>
        <div className={styles.profileContentContainer}>
          <div className={styles.coverImage}>
            <Image src={userData?.coverImage || ''} alt='Cover Image' fill objectFit='cover'/>
          </div>
          <div className={styles.generalInfo}>
            <div className={styles.profilePicture}>
              <Image src={userData?.userImage || ''} alt='Profile image' fill objectFit='cover'/>
            </div>
            <div >
              <h1 className={styles.username}>{userData?.username}</h1>
              <p>{userData?.friends} friends</p>
            </div>
          </div>
          <div className={styles.detailsContainer}>
            <h3>Details</h3>
            <p className={styles.detail}><strong>Age:</strong> {userData?.age || 'No age'}</p>
            <p className={styles.detail}><strong>Address:</strong> {userData?.address || 'No address'}</p>
            <p className={styles.detail}><strong>Job:</strong> {userData?.job || 'No job'}</p>
            <p className={styles.detail}><strong>Email:</strong> {userData?.email || 'No email'}</p>
            <p className={styles.detail}>{userData?.introducition || ''}</p>
          </div>
        </div>
    </div>
  );
}
