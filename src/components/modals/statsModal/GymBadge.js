import { useState } from "react";
import { useTranslation } from "react-i18next";

const GymBadge = ({ badgeImg, badgeName, badgeLocalStorage, location, description, stats }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  function handleInfoOpen() {
    setIsOpen(true);
  }

  function handleInfoClose() {
    setIsOpen(false);
  }

  return (
    <>
      <img
        className={`custom-gym-badge custom-badge-${stats.badges[badgeLocalStorage] ? "unlocked" : "locked"}`}
        src={badgeImg}
        onClick={handleInfoOpen}
      />
      {isOpen && (
        <>
          <div className="modal is-active">
            <div className="modal-background" onClick={handleInfoClose}></div>
            <div className="card">
              <div className="card-content custom-badge-content">
                <div className="custom-badge-header">
                  <div className="custom-badge-title">
                    <img
                      className={`custom-badge-info-img custom-badge-modal-${
                        stats.badges[badgeLocalStorage] ? "unlocked" : "locked"
                      }`}
                      src={badgeImg}
                    />
                    <div className="">
                      <p className="title is-4 is-size-5-mobile">{badgeName}</p>
                      <p className="subtitle is-6 is-size-7-mobile">{location}</p>
                    </div>
                  </div>
                  <button className="delete is-hidden-mobile" aria-label="delete" onClick={handleInfoClose}></button>
                </div>
                <div className="content pt-3">{description}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GymBadge;
