/**
 * HTML COMPONENT BUILDERS
 * Reusable functions that build HTML from data.js.
 */

const createSidebar = (profile, contact, highlight, socials) => {
  const badge = highlight && highlight.label
    ? `<a href="${highlight.url || '#'}" class="sidebar-badge"${highlight.url ? ' target="_blank" rel="noopener"' : ''}>${highlight.label}</a>`
    : '';

  const socialLinks = socials.map(s =>
    `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`
  ).join('');

  return `
    <div class="sidebar-card">
      <div class="sidebar-avatar">
        <img src="${profile.avatar}" alt="${profile.name}">
      </div>
      <h1 class="sidebar-name">${profile.name}</h1>
      <p class="sidebar-title">${profile.title}</p>
      <p class="sidebar-location">${profile.location}</p>
      <p class="sidebar-tagline">${profile.tagline}</p>
      ${badge}
      <div class="sidebar-buttons">
        <a href="${contact.resumeUrl}" class="button primary" target="_blank" rel="noopener">View Resume</a>
        <a href="mailto:${contact.email}" class="button">Email</a>
        <a href="${contact.linkedin}" class="button" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <div class="sidebar-socials">
        <h3>Connect</h3>
        <ul>${socialLinks}</ul>
      </div>
    </div>
  `;
};

const createHero = (profile, contact, highlight) => {
  const badge = highlight && highlight.label
    ? `<a href="${highlight.url || '#'}" class="hero-badge"${highlight.url ? ' target="_blank" rel="noopener"' : ''}>${highlight.label}</a>`
    : '';

  return `
    <div class="hero-avatar">
      <img src="${profile.avatar}" alt="${profile.name}">
    </div>
    <h1 class="name">${profile.name}</h1>
    <p class="title">${profile.title}</p>
    <p class="location">${profile.location}</p>
    <p class="tagline">${profile.tagline}</p>
    ${badge ? `<div>${badge}</div>` : ''}
    <div class="buttons">
      <a href="${contact.resumeUrl}" class="button primary" target="_blank" rel="noopener">View Resume</a>
      <a href="mailto:${contact.email}" class="button">Email</a>
      <a href="${contact.linkedin}" class="button" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  `;
};

const createTechStack = (skills) =>
  skills.map(group => `
    <div class="stack-group">
      <h3>${group.title}</h3>
      <ul>
        ${group.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');

const createAbout = (about) => {
  const callout = about.callout
    ? `
      <div class="about-callout">
        <p class="about-callout-label">${about.callout.label}</p>
        <p class="about-callout-title">${about.callout.title}</p>
        <p>${about.callout.description}</p>
      </div>
    `
    : '';

  return `${about.description}${callout}`;
};

const createExperience = (experience) =>
  experience.map(item => `
    <li>
      <div class="role-title">${item.title}</div>
      <div class="role-meta">
        <span class="company">${item.company}</span>
        <span class="year">${item.year}</span>
      </div>
    </li>
  `).join('');

const getDriveId = (url) => {
  if (!url) return null;
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const createProjectCard = (project, showVideo = false) => {
  let videoEmbed = '';
  if (showVideo && project.videoUrl) {
    const videoId = getDriveId(project.videoUrl);
    if (videoId && videoId !== 'PLACEHOLDER_ID') {
      videoEmbed = `
        <div class="video-container drive-video">
          <div class="drive-wrapper">
            <iframe
              src="https://drive.google.com/file/d/${videoId}/preview"
              title="${project.title}"
              allow="autoplay; fullscreen"
              allowfullscreen></iframe>
          </div>
        </div>
      `;
    }
  }

  const caseStudy = project.detailUrl
    ? ` &nbsp;·&nbsp; <a href="${project.detailUrl}" class="project-link">Case study →</a>`
    : '';

  const liveLink = project.url
    ? `<a href="${project.url}" class="project-link" target="_blank" rel="noopener">${project.linkText || 'View'} →</a>${caseStudy}`
    : '';

  return `
    <div class="project">
      ${videoEmbed}
      <h4>${project.title}</h4>
      <p class="project-tech">${project.tech || ''}</p>
      <p class="project-desc">${project.desc}</p>
      ${liveLink}
    </div>
  `;
};

const createEmptyState = (message, subtext) => `
  <div class="empty-state">
    <p class="empty-state-title">${message}</p>
    ${subtext ? `<p class="empty-state-sub">${subtext}</p>` : ''}
  </div>
`;

const renderProjectList = (projects, opts = {}) => {
  if (!projects || projects.length === 0) {
    return createEmptyState(
      "Selected case studies coming soon.",
      "I'm preparing anonymized case studies from recent client work. In the meantime, the best summary is on my LinkedIn or available by request."
    );
  }
  return projects.map(p => createProjectCard(p, opts.showVideo)).join('');
};

// Speaking / community — cleaner than projects, focused on venue + link
const createSpeakingItem = (item) => `
  <li class="speaking-item">
    <div class="speaking-title">
      <a href="${item.url}" target="_blank" rel="noopener">${item.title}</a>
    </div>
    <div class="speaking-venue">${item.venue}</div>
    ${item.desc ? `<p class="speaking-desc">${item.desc}</p>` : ''}
  </li>
`;

const renderSpeakingList = (speaking) => {
  if (!speaking || speaking.length === 0) return '';
  return speaking.map(createSpeakingItem).join('');
};

const createCertificationRow = (cert) => `
  <li>
    <div class="cert-title">
      <a href="${cert.url}" target="_blank" rel="noopener">${cert.title}</a>
    </div>
    <div class="cert-meta">${cert.issuer}</div>
  </li>
`;

const createCertificationFull = (cert) => `
  <li>
    <div class="cert-title">
      <a href="${cert.url}" target="_blank" rel="noopener">${cert.title}</a>
    </div>
    <div class="cert-meta">${cert.issuer}</div>
    ${cert.desc ? `<p class="project-desc" style="margin-top:0.5rem">${cert.desc}</p>` : ''}
  </li>
`;

const createRecommendationCard = (rec) => {
  const verify = rec.linkedinUrl
    ? `<a href="${rec.linkedinUrl}" target="_blank" rel="noopener" class="verify-link">Verify on LinkedIn ↗</a>`
    : '';
  return `
    <blockquote>
      <p class="rec-quote-text">"${rec.quote}"</p>
      <footer>
        <cite>${rec.author}</cite>
        <span class="rec-title">${rec.title}</span>
        ${verify}
      </footer>
    </blockquote>
  `;
};

const renderRecommendationList = (recs) => {
  if (!recs || recs.length === 0) {
    return createEmptyState(
      "Recommendations live on LinkedIn.",
      "Verified recommendations from past managers and colleagues are on my LinkedIn profile. I'll mirror them here as they're added."
    );
  }
  return recs.map(createRecommendationCard).join('');
};

const createFooterBlock = (title, items, opts = {}) => {
  if (!items || items.length === 0) return '';
  const inline = opts.inline ? ' inline' : '';
  return `
    <div class="footer-block${inline}">
      <h3>${title}</h3>
      <ul>${items.map(opts.render).join('')}</ul>
    </div>
  `;
};

const renderMembership = (item) =>
  `<li><a href="${item.url}" target="_blank" rel="noopener">${item.name}</a></li>`;

const renderContact = (item) =>
  `<li>
    <a href="${item.url}" ${item.name !== 'Email' && item.name !== 'Phone' ? 'target="_blank" rel="noopener"' : ''}>
      ${item.name} — ${item.value}
    </a>
  </li>`;

const createFooter = (footer) => `<p>${footer.copyright}</p>`;
