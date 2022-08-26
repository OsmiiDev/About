import styles from "../styles/SocialMediaCard.module.css";

export type SocialMediaCardProps = {
  icon: React.ReactNode;
  link: string;
  title: string;
  description: string;
}

export const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ icon, link, title, description }: SocialMediaCardProps) => {
  return (
    <a target="_blank" href={link} rel="noreferrer" className={styles.card}>
      {icon}
      <div className={styles.divider}></div>
      <div>
        <h2 className={styles.title}> {title} </h2>
        <p className={styles.description}> {description} </p>
      </div>
    </a>
  );
};

