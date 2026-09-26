import React, { useState } from "react";
import type {  SkillGroup, Experience, Project, Education, Language  ,GalleryState , PortfolioProps , BlogPostPreview, BlogIndexProps   } from "./types";
import { defaultProfile, defaultSkillGroups, defaultExperiences, defaultProjects, defaultEducation, defaultLanguages , defaultPosts} from "./data";
import Layout from "./components/Layout";
import { MailIcon, GithubIcon, LinkedinIcon, LinkArrowIcon, CameraIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./icons";



const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="inline-block text-lg font-bold uppercase tracking-wide underline decoration-2 underline-offset-4">
    {children}
  </h2>
);

const TechLine = ({ tech }: { tech: string[] }) => (
  <p className="mt-3 text-xs text-muted">
    <span className="font-semibold">TECHNOLOGIES:</span> {tech.join(" / ")}
  </p>
);

const ExternalLink = ({ href, label = "View Project" }: { href: string; label?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide underline underline-offset-2 hover:opacity-70 transition-opacity"
  >
    &gt;&gt; {label} <LinkArrowIcon />
  </a>
);

const GalleryButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold uppercase tracking-wide underline underline-offset-2 hover:opacity-70 transition-opacity"
  >
    &gt;&gt; See Project Pictures <CameraIcon />
  </button>
);


const PostCard = ({
  post,
  index,
  // href,
}: {
  post: BlogPostPreview;
  index: number;
  // href: string;
}) => (
  <article className="relative border-l-2 border-border pl-7 pb-10 last:pb-0">
    <span
      className="absolute -left-1.75 top-1 h-3 w-3 rounded-full border border-border bg-accent-soft"
      aria-hidden="true"
    />

    <h2 className="text-base font-bold uppercase tracking-wide">
      LOG_{String(index + 1).padStart(2, "0")}: {post.title}
    </h2>
    <p className="mt-1.5 text-sm text-color-muted">{post.subtitle}</p>

    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-color-muted">
      <span>{post.date}</span>
      <span aria-hidden="true">|</span>
      <span>{post.readingTime}</span>
    </div>

    <p className="mt-3 max-w-170 text-base leading-[1.75]">{post.excerpt}</p>

    {post.tags.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-xs border border-border bg-surface px-2.5 py-1 text-2xs font-medium uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    <span
      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide underline underline-offset-2 hover:opacity-70 transition-opacity"
    >
      &gt;&gt; Read Post <LinkArrowIcon />
    </span>
  </article>
);

/* ----------------------------------------------------------------------- */
/*  Root component                                                          */
/* ----------------------------------------------------------------------- */


function BlogIndex({
  posts = defaultPosts,
  // getHref = (slug) => `/blog/${slug}`,
}: BlogIndexProps): React.ReactElement {
  return (
      <main
        className="mt-12"
      >

        {/* Header */}
       <SectionHeading>06. Blog Posts </SectionHeading>

        {/* Post list */}
        <div className="mt-10 flex flex-col">
          {posts.map((post, idx) => (
            <PostCard key={post.slug} post={post} index={idx} 
            // href={getHref(post.slug)} 
            />
          ))}
        </div>
      </main>
  );
}



const ProjectGalleryModal = ({
  gallery,
  onClose,
  onNavigate,
}: {
  gallery: GalleryState;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
}) => {
  const { title, images, index } = gallery;

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} pictures`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8"
      onClick={onClose}
      style={{
        fontFamily:
          '"JetBrains Mono","IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-180 rounded-[3px] border border-border bg-bg p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
      >
        {/* Header row */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xs font-bold uppercase tracking-wide text-text truncate">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-xs border border-border-soft bg-accent p-1.5 text-text hover:opacity-70 transition-opacity"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Image frame */}
        <div className="relative mt-4 overflow-hidden rounded-xs border-[3px] border-border bg-surface">
          <img
            src={images[index]}
            alt={`${title} screenshot ${index + 1} of ${images.length}`}
            className="aspect-video w-full object-cover"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onNavigate(-1)}
                aria-label="Previous picture"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border-soft bg-bg/90 p-1.5 text-text hover:opacity-70 transition-opacity"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={() => onNavigate(1)}
                aria-label="Next picture"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border-soft bg-bg/90 p-1.5 text-text hover:opacity-70 transition-opacity"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}
        </div>

        {/* Footer: dashed rule + counter + dots */}
        {images.length > 1 && (
          <div className="mt-4">
            <div className="border-t-2 border-dashed border-border-soft" />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xs uppercase tracking-[0.15em] text-muted">
                {index + 1} / {images.length}
              </span>
              <div className="flex items-center gap-1.5">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full border border-border ${
                      i === index ? "bg-text" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------------------------- */
/*  Section: Skills                                                         */
/* ----------------------------------------------------------------------- */

const SkillsSection = ({ groups }: { groups: SkillGroup[] }) => (
  <section className="mt-10">
    <SectionHeading>02. Skills</SectionHeading>
    <div className="mt-4 md:rounded-[3px] md:border md:border-border py-5 md:p-5 sm:p-6 flex flex-col gap-5">
      {groups.map((group) => (
        <div key={group.category}>
          <p className="text-xs font-bold uppercase tracking-wide text-muted">
            {group.category}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="rounded-xs border border-border-soft bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ----------------------------------------------------------------------- */
/*  Section: Experience                                                     */
/* ----------------------------------------------------------------------- */

const ExperienceRow = ({ experience }: { experience: Experience }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="py-6 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-bold">
          {experience.role}
          {experience.link && (
            <a
              href={experience.link}
              target="_blank"
              rel="noreferrer"
              className="ml-2 align-middle text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              [ Link ]
            </a>
          )}
        </h3>
        <span className="text-xs text-muted">
          {experience.startDate} &ndash; {experience.endDate}
        </span>
      </div>

      <p className="mt-1 text-sm text-muted">
        {experience.company}
        {experience.location ? ` \u2022 ${experience.location}` : ""}
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-text hover:opacity-70 transition-opacity"
        aria-expanded={open}
      >
        [ {open ? "Hide_Details" : "Show_Details"} ]
        <span className={`inline-block transition-transform ${open ? "" : "rotate-180"}`}>▲</span>
      </button>

      {open && (
        <>
          <ul className="mt-3 space-y-2 border-l-2 border-border-soft pl-4">
            {experience.bullets.map((bullet, i) => (
              <li key={i} className="text-base leading-[1.7] text-text">
                {bullet}
              </li>
            ))}
          </ul>
          {experience.tech && experience.tech.length > 0 && <TechLine tech={experience.tech} />}
        </>
      )}
    </div>
  );
};

const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => (
  <section className="mt-12">
    <SectionHeading>03. Experience</SectionHeading>

    <div className="mt-6 divide-y divide-dashed divide-border-soft">
      {experiences.map((exp) => (
        <ExperienceRow key={exp.id} experience={exp} />
      ))}
    </div>
  </section>
);

/* ----------------------------------------------------------------------- */
/*  Section: Projects                                                       */
/* ----------------------------------------------------------------------- */

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const [gallery, setGallery] = useState<GalleryState | null>(null);

  const openGallery = (title: string, images: string[]) => setGallery({ title, images, index: 0 });
  const closeGallery = () => setGallery(null);
  
  const navigateGallery = (direction: 1 | -1) =>
    setGallery((current) =>
      current
        ? { ...current, index: (current.index + direction + current.images.length) % current.images.length }
        : current
    );

  return (
    <section className="mt-12">
      <SectionHeading>04. Projects</SectionHeading>

      <div className="mt-6 flex flex-col">
        
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`relative border-l-2 border-border-soft pl-7 mb-8 hover:border-text group  ${
              idx === projects.length - 1 ? "pb-0" : "pb-0"
            }`}
          >
            <span
              className="absolute -left-1.75 top-0 h-3 w-3 rounded-full border border-border bg-accent-soft group-hover:bg-border group-hover:border-accent-soft "
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-bold uppercase tracking-wide">
                {project.title}
              </h3>
              {project.period && (
                <span className="text-xs text-muted">{project.period}</span>
              )}
            </div>

            <ul className="mt-3 space-y-2">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="text-base leading-[1.7]">
                  {bullet}
                </li>
              ))}
            </ul>

            <TechLine tech={project.tech} />

            <div className="flex flex-wrap items-center gap-x-6">
              {project.link && <ExternalLink href={project.link} />}
              {project.assets && project.assets.length > 0 && (
                <GalleryButton
                  onClick={() => openGallery(`FILE_${idx + 1}: ${project.title}`, project.assets!.map((asset) => asset.src))}
                />
              )}
            </div>
          </div>
        ))}

      </div>

      {gallery && (
        <ProjectGalleryModal gallery={gallery} onClose={closeGallery} onNavigate={navigateGallery} />
      )}
    </section>
  );
};

/* ----------------------------------------------------------------------- */
/*  Section: Education                                                      */
/* ----------------------------------------------------------------------- */

const EducationSection = ({ education }: { education: Education[] }) => (
  <section className="mt-12">
    <SectionHeading>05. Education</SectionHeading>

    <div className="mt-6 flex flex-col gap-6">
      {education.map((edu) => (
        <div key={edu.id} className="border-l-2 border-border pl-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-base font-bold">{edu.school}</h3>
            <span className="text-xs text-right text-muted">{edu.period}</span>
          </div>
          <p className="mt-1 max-w-180 text-sm leading-[1.7] text-muted">
            {edu.degree}
            {edu.location ? ` \u2014 ${edu.location}` : ""}
          </p>
        </div>
      ))}
    </div>
  </section>
);

/* ----------------------------------------------------------------------- */
/*  Section: Languages                                                      */
/* ----------------------------------------------------------------------- */

const LanguagesSection = ({ languages }: { languages: Language[] }) => (
  <section className="mt-12">
    <SectionHeading>07. Languages</SectionHeading>

    <div className="mt-4 flex flex-wrap gap-3">
      {languages.map((lang) => (
        <span
          key={lang.id}
          className="rounded-xs border border-border-soft bg-surface px-3 py-1.5 text-xs tracking-wide"
        >
          <span className="font-bold">{lang.name}:</span> {lang.level}
        </span>
      ))}
    </div>
  </section>
);



export default function Portfolio({
  profile = defaultProfile,
  skillGroups = defaultSkillGroups,
  experiences = defaultExperiences,
  projects = defaultProjects,
  education = defaultEducation,
  languages = defaultLanguages,
}: PortfolioProps): React.ReactElement {
  return (
    <Layout>

      <main>
        {/* Top bar */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs tracking-[0.15em] text-muted">
            <span>STATUS:</span>
            <span className="inline-flex items-center rounded-full border border-border-soft bg-accent px-3 py-1 text-2xs font-semibold tracking-[0.12em] text-text">
              {profile.status}
            </span>
          </div>
          <div className="text-xs tracking-[0.2em] text-muted">
            {profile.location.toUpperCase()}
          </div>
        </div>

        {/* Hero: name + photo */}
        <div className="mt-6 flex items-start justify-between gap-8 md:flex-nowrap flex-wrap">
          <div className="min-w-65">
            <h1 className="font-bold uppercase leading-[0.98] tracking-tight text-hero">
              {profile.name}
              {/* <span className="inline-block w-[0.5ch] translate-y-[0.08em] bg-text align-baseline">
                &nbsp;
              </span> */}
            </h1>
            <p className="mt-3 text-lg text-muted">{profile.title}</p>

            <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
              <span>{profile.location}</span>
              <span aria-hidden="true">|</span>
              <span>{profile.phone}</span>
              <span aria-hidden="true">|</span>
              <a href={`mailto:${profile.email}`} className="underline underline-offset-2 hover:opacity-70 transition-opacity">
                {profile.email}
              </a>
              <span aria-hidden="true">|</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
                LinkedIn
              </a>
              <span aria-hidden="true">|</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
                GitHub
              </a>
            </p>

          </div>

          <div className="h-37.5 w-36.25 shrink-0 overflow-hidden rounded-xs border-[4px] outline-border outline-[2px] border-bg bg-surface">
            <img
              src={profile.photoUrl}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-contains grayscale-8 contrast-[1.02]"
            />
          </div>
        </div>

        {/* Socials + dashed rule */}
        <div className="mt-10 flex items-center gap-3">
          <div className="flex items-center gap-2 shrink-0 rounded-[3px] bg-accent px-3 py-2">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-text hover:opacity-70 transition-opacity">
              <MailIcon />
            </a>
            <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="text-text hover:opacity-70 transition-opacity">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-text hover:opacity-70 transition-opacity">
              <LinkedinIcon />
            </a>
          </div>
          <div className="h-0 flex-1 border-t-2 border-dashed border-border-soft" aria-hidden="true" />
        </div>

        {/* 01. About */}
        <section className="mt-10">
          <SectionHeading>01. About</SectionHeading>
          <p className="mt-4  text-base leading-[1.75] text-text">
            {profile.about}
          </p>
        </section>

        <SkillsSection groups={skillGroups} />

        <ExperienceSection experiences={experiences} />

        <ProjectsSection projects={projects} />

        <EducationSection education={education} />        

        <BlogIndex/>

        <LanguagesSection languages={languages} />

      </main>
    </Layout>
  );
}

/* ----------------------------------------------------------------------- */
/*  Default data — Chamseldin Boukhalkhal's resume                          */
/* ----------------------------------------------------------------------- */



