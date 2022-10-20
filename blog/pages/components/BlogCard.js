import styles from "../../styles/BlogCard.module.css";
import Link from "next/link";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto.url} alt="" />
        </div>
      </Link>
      <div className={styles.text}>
        <h1>{title}</h1>
        <div className={styles.details}>
          <div className={styles.author}>
            <img src={author.avatar.url} alt={author.name} />
            <h2>{author.name}</h2>
            </div>
            <div className={styles.date}>
              <h2>{datePublished}</h2>
            </div>
        </div>
      </div>
    </div>
  );
}
