import HeaderSection from '../components/header/HeaderSection'
import FooterSection from '../components/footer/FooterSection'
import SettingsSidebar from '../components/sidebar/SettingsSidebar'
import FeedbackSection from '../components/feedback/FeedbackSection'

const FeedbackPage = () => {
  return (
    <div className='root-layout'>
      <HeaderSection/>
      <FeedbackSection/>
      <FooterSection/>
      <SettingsSidebar/>
    </div>
  )
}

export default FeedbackPage
