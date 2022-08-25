import Link from "next/link";

export type SocialMediaCardProps = {
  icon: React.ReactNode;
  link: string;
  title: string;
  description: string;
}

export const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ icon, link, title, description }: SocialMediaCardProps) => {
  return (
    <div className="rounded-sm bg-neutral-400">
      {icon}
      <Link href = {link}>
        <a>
          <h2> {title} </h2>
          <p> {description} </p>
        </a>
      </Link>
    </div>
  );
};

