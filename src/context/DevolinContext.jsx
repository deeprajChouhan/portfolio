import { createContext, useEffect, useRef, useState } from "react";
import { portfolioList } from "../data/Data";

const DevolinContext = createContext();

const DevolinContextProvider = ({ children }) => {
  // About Button
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const openAboutSection = () => {
    setIsAboutOpen(true);
  };
  const closeAboutSection = () => {
    setIsAboutOpen(false);
  };

  // Service Button
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const openServiceSection = () => {
    setIsServiceOpen(true);
  };
  const closeServiceSection = () => {
    setIsServiceOpen(false);
  };

  // Portfolio Button
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const openPortfolioSection = () => {
    setIsPortfolioOpen(true);
  };
  const closePortfolioSection = () => {
    setIsPortfolioOpen(false);
  };

  // Faq Button
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const openFaqSection = () => {
    setIsFaqOpen(true);
  };
  const closeFaqSection = () => {
    setIsFaqOpen(false);
  };

  // Gallery Button
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const openGallerySection = () => {
    setIsGalleryOpen(true);
  };
  const closeGallerySection = () => {
    setIsGalleryOpen(false);
  };

  // Blog Button
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const openBlogSection = () => {
    setIsBlogOpen(true);
  };
  const closeBlogSection = () => {
    setIsBlogOpen(false);
  };

  // Contact Button
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContactSection = () => {
    setIsContactOpen(true);
  };
  const closeContactSection = () => {
    setIsContactOpen(false);
  };

  // Price Modal
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const openPriceModalSection = () => {
    setIsPriceModalOpen(true);
  };
  const closePriceModalSection = () => {
    setIsPriceModalOpen(false);
  };

  // Portfolio Filter
  const [activeTab, setActiveTab] = useState("all"); 
  const filteredItemList =
  activeTab === 'all'
    ? portfolioList
    : portfolioList.filter((item) => item.category === activeTab);

  // Blog Modal
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const openBlogModalSection = () => {
    setIsBlogModalOpen(true);
  };
  const closeBlogModalSection = () => {
    setIsBlogModalOpen(false);
  };

  // Settings Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebarSection = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebarSection = () => {
    setIsSidebarOpen(false);
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)){
        closeSidebarSection()
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  
  // Dark mode
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => {
      const newIsDarkMode = !prevIsDarkMode;
      return newIsDarkMode;
    });
  };
  
  useEffect(() => {
    const link = document.querySelector('#dark-theme');

    if (link) {
      link.href = isDarkMode
        ? '/assets/css/style-dark.css'
        : '';
    }

  }, [isDarkMode]);

  // Sharp mode
  const [isSharpMode, setIsSharpMode] = useState(false)
  const toggleSharpMode = () => {
    setIsSharpMode((prevIsSharpMode) => {
      const newIsSharpMode = !prevIsSharpMode;
      return newIsSharpMode;
    });
  };
  
  useEffect(() => {
    const link = document.querySelector('#sharp-theme');

    if (link) {
      link.href = isSharpMode
        ? '/assets/css/style-sharp.css'
        : '';
    }

  }, [isSharpMode]);

   // Sharp mode
   const [isRtlMode, setIsRtlMode] = useState(false)
   const toggleRtlMode = () => {
     setIsRtlMode((prevIsRtlMode) => {
       const newIsRtlMode = !prevIsRtlMode;
       return newIsRtlMode;
     });
   };
   
   useEffect(() => {
     const link = document.querySelector('#rtl-theme');
 
     if (link) {
       link.href = isRtlMode
         ? '/assets/css/style-rtl.css'
         : '';
     }
 
   }, [isRtlMode]);

  //  Light box 
  const [isImageLightBoxOpen, setIsImageLightBoxOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(""); // State to store the selected image URL

  const openImageLightBoxSection = (imageUrl) => {
    setSelectedImageUrl(imageUrl); // Set the selected image URL
    setIsImageLightBoxOpen(true);
  };
  const imageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)){
        setIsImageLightBoxOpen(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <DevolinContext.Provider
      value={{
        isAboutOpen,
        openAboutSection,
        closeAboutSection,
        isServiceOpen,
        openServiceSection,
        closeServiceSection,
        isPortfolioOpen,
        openPortfolioSection,
        closePortfolioSection,
        isFaqOpen,
        openFaqSection,
        closeFaqSection,
        isGalleryOpen,
        openGallerySection,
        closeGallerySection,
        isBlogOpen,
        openBlogSection,
        closeBlogSection,
        isContactOpen,
        openContactSection,
        closeContactSection,
        isPriceModalOpen,
        openPriceModalSection,
        closePriceModalSection,
        activeTab,
        setActiveTab,
        filteredItemList,
        isBlogModalOpen,
        openBlogModalSection,
        closeBlogModalSection,
        isSidebarOpen,
        openSidebarSection,
        closeSidebarSection,
        sidebarRef,
        toggleDarkMode,
        isDarkMode,
        isSharpMode,
        toggleSharpMode,
        isRtlMode,
        toggleRtlMode,
        isImageLightBoxOpen,
        openImageLightBoxSection,
        imageRef,
        selectedImageUrl
      }}
    >
      {children}
    </DevolinContext.Provider>
  );
};

export { DevolinContext, DevolinContextProvider };
