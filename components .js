/**
 * HTML COMPONENT BUILDERS
 * Reusable functions that build HTML from data.js.
 */

// Branded product logos — inlined SVGs, both scale to same displayed size via CSS
const BRAND_ICONS = {
  fabric: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" aria-hidden="true"><path fill="url(#i7da702-a)" fill-rule="evenodd" d="m2.984 18.557-.352 1.286a14 14 0 0 0-.413 1.554 3.377 3.377 0 0 0 2.783 4.552 5.6 5.6 0 0 0 1.614-.023l2.768-.382a1.75 1.75 0 0 0 1.452-1.277l1.905-6.995z" clip-rule="evenodd"/><path fill="url(#i7da702-b)" d="M5.683 18.889c-2.917.452-3.516 2.653-3.516 2.653l2.794-10.265 14.597-1.974-1.99 7.23a1.02 1.02 0 0 1-.833.746l-.081.014L5.6 18.903l.082-.014Z"/><path fill="url(#i7da702-c)" fill-opacity=".8" d="M5.683 18.889c-2.917.452-3.516 2.653-3.516 2.653l2.794-10.265 14.597-1.974-1.99 7.23a1.02 1.02 0 0 1-.833.746l-.081.014L5.6 18.903l.082-.014Z"/><path fill="url(#i7da702-d)" d="m7.339 12.34 16.16-2.388a.96.96 0 0 0 .794-.702l1.668-6.036a.957.957 0 0 0-1.043-1.207l-15.42 2.28A4.31 4.31 0 0 0 6.03 7.401l-2.223 8.06c.446-1.631.72-2.614 3.53-3.122Z"/><path fill="url(#i7da702-e)" d="m7.339 12.34 16.16-2.388a.96.96 0 0 0 .794-.702l1.668-6.036a.957.957 0 0 0-1.043-1.207l-15.42 2.28A4.31 4.31 0 0 0 6.03 7.401l-2.223 8.06c.446-1.631.72-2.614 3.53-3.122Z"/><path fill="url(#i7da702-f)" fill-opacity=".4" d="m7.339 12.34 16.16-2.388a.96.96 0 0 0 .794-.702l1.668-6.036a.957.957 0 0 0-1.043-1.207l-15.42 2.28A4.31 4.31 0 0 0 6.03 7.401l-2.223 8.06c.446-1.631.72-2.614 3.53-3.122Z"/><path fill="url(#i7da702-g)" d="M7.339 12.34c-2.34.424-2.922 1.178-3.309 2.359l-1.863 6.844s.596-2.179 3.477-2.645l11.01-1.604.082-.013c.403-.061.729-.359.832-.746l1.638-5.948z"/><path fill="url(#i7da702-h)" fill-opacity=".2" d="M7.339 12.34c-2.34.424-2.922 1.178-3.309 2.359l-1.863 6.844s.596-2.179 3.477-2.645l11.01-1.604.082-.013c.403-.061.729-.359.832-.746l1.638-5.948z"/><path fill="url(#i7da702-i)" fill-rule="evenodd" d="M5.644 18.898c-2.435.394-3.235 2.007-3.425 2.499a3.38 3.38 0 0 0 2.783 4.553 5.6 5.6 0 0 0 1.614-.023l2.768-.383a1.75 1.75 0 0 0 1.452-1.276l1.736-6.378z" clip-rule="evenodd"/><defs><linearGradient id="i7da702-a" x1="7.371" x2="7.371" y1="25.997" y2="17.271" gradientUnits="userSpaceOnUse"><stop offset=".056" stop-color="#2AAC94"/><stop offset=".155" stop-color="#239C87"/><stop offset=".372" stop-color="#177E71"/><stop offset=".588" stop-color="#0E6961"/><stop offset=".799" stop-color="#095D57"/><stop offset="1" stop-color="#085954"/></linearGradient><linearGradient id="i7da702-b" x1="18.396" x2="9.971" y1="19.666" y2="10.503" gradientUnits="userSpaceOnUse"><stop offset=".042" stop-color="#ABE88E"/><stop offset=".549" stop-color="#2AAA92"/><stop offset=".906" stop-color="#117865"/></linearGradient><linearGradient id="i7da702-c" x1="-2.309" x2="5.709" y1="19.221" y2="16.487" gradientUnits="userSpaceOnUse"><stop stop-color="#6AD6F9"/><stop offset="1" stop-color="#6AD6F9" stop-opacity="0"/></linearGradient><linearGradient id="i7da702-d" x1="3.808" x2="25.15" y1="8.731" y2="8.731" gradientUnits="userSpaceOnUse"><stop offset=".043" stop-color="#25FFD4"/><stop offset=".874" stop-color="#55DDB9"/></linearGradient><linearGradient id="i7da702-e" x1="3.808" x2="23.033" y1="5.747" y2="14.675" gradientUnits="userSpaceOnUse"><stop stop-color="#6AD6F9"/><stop offset=".23" stop-color="#60E9D0"/><stop offset=".651" stop-color="#6DE9BB"/><stop offset=".994" stop-color="#ABE88E"/></linearGradient><linearGradient id="i7da702-f" x1="5.586" x2="16.04" y1="7.418" y2="9.73" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"/><stop offset=".459" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i7da702-g" x1="9.052" x2="9.299" y1="16.374" y2="9.043" gradientUnits="userSpaceOnUse"><stop offset=".205" stop-color="#063D3B" stop-opacity="0"/><stop offset=".586" stop-color="#063D3B" stop-opacity=".237"/><stop offset=".872" stop-color="#063D3B" stop-opacity=".75"/></linearGradient><linearGradient id="i7da702-h" x1="1.286" x2="10.219" y1="15.645" y2="17.325" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"/><stop offset=".459" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i7da702-i" x1="7.739" x2="5.997" y1="23.58" y2="15.057" gradientUnits="userSpaceOnUse"><stop offset=".064" stop-color="#063D3B" stop-opacity="0"/><stop offset=".17" stop-color="#063D3B" stop-opacity=".135"/><stop offset=".562" stop-color="#063D3B" stop-opacity=".599"/><stop offset=".85" stop-color="#063D3B" stop-opacity=".9"/><stop offset="1" stop-color="#063D3B"/></linearGradient></defs></svg>`,
  excel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true"><rect fill="#21A365" height="29.8" width="49.3" x="78.7" y="34.2"/><rect fill="#107C41" height="29.8" width="49.3" x="78.7" y="64"/><rect fill="#107C41" height="29.8" width="49.2" x="29.5" y="34.2"/><path fill="#185B37" d="M78.7,93.8V64H29.6v29.8v4.3v19.6c0,3.2,2.6,5.8,5.8,5.8h86.7c3.2,0,5.8-2.6,5.8-5.8V93.8H78.7z"/><path fill="#33C481" d="M122.1,4.5H78.6v29.8h49.4V10.3C127.9,7.1,125.3,4.5,122.1,4.5z"/><path fill="#21A365" d="M78.7,4.5H35.5c-3.2,0-5.8,2.6-5.8,5.8v23.9h49.1V4.5z"/><path fill="#17864C" d="M59.5,96.5h-53c-3.5,0-6.4-2.9-6.4-6.4V37.9c0-3.5,2.9-6.4,6.4-6.4h53c3.5,0,6.4,2.9,6.4,6.4v52.2 C65.9,93.6,63.1,96.5,59.5,96.5z"/><path fill="#FFFFFF" d="M40.5,82.4l-3.9-7.1c-1.6-2.8-2.6-4.7-3.7-6.8h-0.1c-0.9,2.1-1.8,4-3.3,6.8L26,82.4h-7.6l10.8-18.1L18.7,46.5 h7.7l3.9,7.4c1.2,2.2,2.1,4,3,6h0.2c1-2.2,1.7-3.8,2.9-6l3.9-7.4h7.6L37.2,64l11.1,18.4H40.5z"/></svg>`,
  default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
};

const createSidebar = (profile, contact, highlight, socials, credentials) => {
  // Prefer credentials array (new); fall back to single highlight for backward compat
  const creds = credentials && credentials.length > 0
    ? credentials
    : (highlight && highlight.label ? [{ label: highlight.label, url: highlight.url, theme: 'default' }] : []);

  const credBlock = creds.length > 0
    ? `
      <div class="sidebar-credentials">
        ${creds.map(c => {
          const theme = c.theme || 'default';
          const icon = BRAND_ICONS[theme] || BRAND_ICONS.default;
          return `
            <a href="${c.url || '#'}" class="cred-btn cred-${theme}"${c.url ? ' target="_blank" rel="noopener"' : ''}>
              <span class="cred-icon">${icon}</span>
              <span class="cred-label">${c.label}</span>
            </a>
          `;
        }).join('')}
      </div>
    `
    : '';

  const socialsBlock = socials && socials.length > 0
    ? `
      <div class="sidebar-socials">
        <h3>Connect</h3>
        <ul>${socials.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`).join('')}</ul>
      </div>
    `
    : '';

  return `
    <div class="sidebar-card">
      <div class="sidebar-avatar">
        <img src="${profile.avatar}" alt="${profile.name}">
      </div>
      <h1 class="sidebar-name">${profile.name}</h1>
      <p class="sidebar-title">${profile.title}</p>
      <p class="sidebar-location">${profile.location}</p>
      <p class="sidebar-tagline">${profile.tagline}</p>
      ${credBlock}
      <div class="sidebar-buttons">
        <a href="${contact.resumeUrl}" class="button primary" target="_blank" rel="noopener">View Resume</a>
        <a href="mailto:${contact.email}" class="button">Email</a>
        <a href="${contact.linkedin}" class="button" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      ${socialsBlock}
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
