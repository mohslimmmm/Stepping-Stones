const PagePlaceholder = ({ name }) => (
  <div className="section-padding flex flex-col items-center justify-center min-h-[60vh]">
    <h1 className="text-4xl font-serif mb-4">{name}</h1>
    <p className="text-deep-grey/60">Coming soon: A beautiful narrative of bespoke interior design.</p>
  </div>
);

export const Home = () => <PagePlaceholder name="Home" />;
export const Portfolio = () => <PagePlaceholder name="Discovery Page" />;
export const ProjectDetail = () => <PagePlaceholder name="Amagansett Retreat" />;
export const Journal = () => <PagePlaceholder name="Design Journal" />;
export const About = () => <PagePlaceholder name="Trust & About" />;
export const Contact = () => <PagePlaceholder name="Contact & Design Consultation" />;
export const Dashboard = () => <PagePlaceholder name="Admin Dashboard" />;
export const ProjectTable = () => <PagePlaceholder name="Project Table" />;
export const ProjectForm = () => <PagePlaceholder name="Project Edit/Add Form" />;
export const LeadsInbox = () => <PagePlaceholder name="Leads Inbox (CRM)" />;
