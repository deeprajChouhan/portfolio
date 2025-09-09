import { useEffect, useState } from "react";

const ResearchPage = () => {
  const [researches, setResearches] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = import.meta.env.VITE_BASEROW_TOKEN;
    const tableId = import.meta.env.VITE_BASEROW_RESEARCHES_TABLE_ID;
    if (!token || !tableId) {
      setError("Missing Baserow configuration");
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.baserow.io/api/database/rows/table/${tableId}/?user_field_names=true`, {
          headers: { Authorization: `Token ${token}` }
        });
        if (!res.ok) throw new Error("Failed to fetch researches");
        const data = await res.json();
        setResearches(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAccordionBtn = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return (
      <div className="faq-content">
        <div className="container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="faq-content">
        <div className="container">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="faq-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="section-title title-center">
              My <span>Researchs</span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="faq-box">
              {researches.map((item) => (
                <div className="single-card" key={item.id}>
                  <div
                    className="faq-header"
                    role="button"
                    onClick={() => handleAccordionBtn(item.id)}
                  >
                    <h3>{item.title}</h3>
                    <div className="icon">
                      <i
                        className={`fa-light ${
                          openId === item.id ? "fa-minus" : "fa-plus"
                        }`}
                      ></i>
                    </div>
                  </div>
                  <div
                    className={`faq-body ${
                      openId === item.id ? "d-block" : "d-none"
                    }`}
                  >
                    {item.status && (
                      <p>
                        <strong>Status:</strong> {item.status}
                      </p>
                    )}
                    {item.journal && <p>{item.journal}</p>}
                    {item.abstract && <p>{item.abstract}</p>}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: "2%" }}
                      >
                        View Paper{" "}
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
