import { ChevronDown, ChevronRight } from "lucide-react";
import "./CandidateSection.css";

const CandidateSection = ({ titulo, children, isOpen, onToggle }) => {
  return (
    <div className={`cp-section-wrapper ${isOpen ? "cp-section-open" : ""}`}>
      <div className="cp-section-item" onClick={onToggle}>
        <span>{titulo}</span>
        <ChevronDown
          size={20}
          className={`cp-chevron ${isOpen ? "cp-chevron-rotated" : ""}`}
        />
      </div>
      <div
        className={`cp-section-content ${isOpen ? "cp-section-content-open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CandidateSection;
