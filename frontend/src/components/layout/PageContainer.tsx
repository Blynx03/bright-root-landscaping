import styles from './PageContainer.module.css';

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({
  children,
  className = '',
}: PageContainerProps) {

  const containerClass = `${styles.pageContainer} ${className}`.trim();
  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}