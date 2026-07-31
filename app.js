/**
 * PAGE CONDUCTOR
 * Detects current page and injects content into the right containers.
 */

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop() || "index.html";

  const set = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  set("footer-container", createFooter(siteData.footer));

  // ----- Homepage (two-column with sidebar) ------------------------------
  if (path === "index.html" || path === "") {
    set("sidebar-container", createSidebar(
      siteData.profile,
      siteData.contact,
      siteData.highlight,
      siteData.socials
    ));

    set("about-container", createAbout(siteData.about));
    set("experience-list-container", createExperience(siteData.experience));
    set("stack-list-container", createTechStack(siteData.skills));

    set("project-list-summary",
      renderProjectList(siteData.projects.slice(0, 4), { showVideo: false })
    );

    // Speaking (on-page section, no dedicated page yet)
    set("speaking-list-container", renderSpeakingList(siteData.speaking));

    set("cert-list-summary",
      siteData.certifications.slice(0, 4).map(createCertificationRow).join("")
    );

    set("recommendations-summary-container",
      renderRecommendationList(siteData.recommendations.slice(0, 2))
    );

    set("memberships-block",
      createFooterBlock("A member of", siteData.memberships, { render: renderMembership })
    );
    set("contact-block",
      createFooterBlock("Get in touch", siteData.contactActions, { render: renderContact })
    );
  }

  // ----- Sub-pages -------------------------------------------------------
  if (path === "projects.html") {
    set("projects-full-container",
      renderProjectList(siteData.projects, { showVideo: true })
    );
  }

  if (path === "certifications.html") {
    set("certifications-full-container",
      siteData.certifications.map(createCertificationFull).join("")
    );
  }

  if (path === "recommendations.html") {
    set("recommendations-full-container",
      renderRecommendationList(siteData.recommendations)
    );
  }
});
