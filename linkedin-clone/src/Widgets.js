import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle=(heading,subtitle) => (
        <div className='widgets_article'>
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <InfoIcon/>
      </div>
      {newsArticle("Meta takes on Twitter with a rival microblogging platform called Threads")}
      {newsArticle("Top Tech News Today: Google Introduces Advertising Tools Backed by AI to Automate. SEC is Being Sued by Binance in Court.")}
      {newsArticle("Top Tech News Today: Edit Message For WhatsApp Windows Desktop App, Centre's Response To Jack Dorsey's Twitter 'Pressurised' Claims, OnePlus Nord 3 Launching Soon And More")}
      {newsArticle("Top Tech News Today: MAS and Google Cloud Partner to Develop Generative AI Technology Capacities. Chinese Yuan is an Important Currency for Crypto Traders.")}
      {newsArticle("Weekly Tech Wrap: Musk Meets PM Modi, Twitter Gets Sued, Nothing Working On A Watch, More Top Tech Headlines")}
      {newsArticle("Top Tech News Today: Poor Results from ChatGPT in US Urologists’ Exam. As the US Prepares for a Slowing Down, Crypto Companies are Looking Overseas")}
      {newsArticle("Top Tech News Today: iPhone 15 Series To See Strong Sales Despite Price Hike, Meta's Metamate AI Chatbot Launched, IT Ministry Probing CoWIN Vax 'Data Leak")}
      {newsArticle("Weekly Tech Wrap: Apple’s AR/VR Headset, Sam Altman’s AI Warnings, Paedophilia On Instagram, And More Top Tech News")}
    </div>
  );
}

export default Widgets;
