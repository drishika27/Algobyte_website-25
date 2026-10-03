import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaGithub,
  FaTools,
  FaSearch,
  FaFileAlt,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import resources, { semesterPapers } from "../data/resources";

const icons = {
  dsa: <FaCode />,
  academics: <FaGraduationCap />,
  webdev: <FaLaptopCode />,
  jobs: <FaBriefcase />,
  opensource: <FaGithub />,
  tools: <FaTools />,
};

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const search = query.trim().toLowerCase();

  // Keep only the links that match the search, and drop empty categories
  const visibleCategories = resources
    .filter((category) => activeCategory === "all" || category.id === activeCategory)
    .map((category) => ({
      ...category,
      links: category.links.filter(
        (link) =>
          !search ||
          category.title.toLowerCase().includes(search) ||
          link.name.toLowerCase().includes(search) ||
          link.desc.toLowerCase().includes(search)
      ),
    }))
    .filter((category) => category.links.length > 0);

  const showPapers =
    (activeCategory === "all" || activeCategory === "pyq") &&
    (!search ||
      "previous year papers pyq semester exam".includes(search) ||
      semesterPapers.some((paper) => paper.year.includes(search)));

  return (
    <div id="resources">
      <h2>Resources</h2>
      <p className="resourcesIntro">
        Handpicked links to help you learn, practice and grow, from your first
        line of code to your first internship.
      </p>

      <div className="resourcesControls">
        <div className="resourcesSearch">
          <FaSearch />
          <input
            type="text"
            placeholder="Search resources, e.g. React, NPTEL, Git..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search resources"
          />
        </div>

        <div className="resourcesFilters">
          <button
            className={activeCategory === "all" ? "active" : ""}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {resources.map((category) => (
            <button
              key={category.id}
              className={activeCategory === category.id ? "active" : ""}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.title}
            </button>
          ))}
          <button
            className={activeCategory === "pyq" ? "active" : ""}
            onClick={() => setActiveCategory("pyq")}
          >
            Previous Year Papers
          </button>
        </div>
      </div>

      {showPapers && (
        <motion.div
          className="pyqSection"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <header>
            <span className="resourceIcon">
              <FaFileAlt />
            </span>
            <div>
              <h3>Previous Year Papers</h3>
              <p>
                Semester exam papers from the university library. Open a year,
                then your department folder (e.g. Engineering or Mathematics
                &amp; Computer Sc).
              </p>
            </div>
          </header>

          <div className="pyqYears">
            {semesterPapers.map((paper) => (
              <a key={paper.year} href={paper.url} target="_blank" rel="noreferrer">
                <strong>{paper.year}</strong>
                <span>
                  Semester papers <FiExternalLink />
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {!showPapers && visibleCategories.length === 0 && (
        <p className="resourcesEmpty">No resources found for "{query}".</p>
      )}

      {visibleCategories.length > 0 && (
        <section>
          {visibleCategories.map((category) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <header>
                <span className="resourceIcon">{icons[category.id]}</span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.desc}</p>
                </div>
              </header>

              <ul>
                {category.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      <div>
                        <strong>{link.name}</strong>
                        <span>{link.desc}</span>
                      </div>
                      <FiExternalLink />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>
      )}
    </div>
  );
};

export default Resources;
