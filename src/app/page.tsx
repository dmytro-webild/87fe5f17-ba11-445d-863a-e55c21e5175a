"use client"

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Sparkles, Award, Beaker, TrendingUp, Heart, HelpCircle, BookOpen } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="BachchaWipes"
          navItems={[
            { name: "Products", id: "products" },
            { name: "Ingredients", id: "ingredients" },
            { name: "Care", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "#products" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Gentle Care For Every Little Moment"
          description="Ultra-soft baby wipes made with skin-loving ingredients for delicate newborn and baby skin."
          tag="Premium Baby Care"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Explore Products", href: "#products" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/close-up-blue-marshmallows_23-2147748095.jpg", imageAlt: "Premium baby wipes pack" },
            { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/child-one-little-studio-alone_1304-922.jpg", imageAlt: "Happy baby lifestyle" },
            { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/sponge-stars-soap-bar-sanitizer-soap-dispenser-blue-background_23-2147940458.jpg", imageAlt: "Close up of baby care products" },
            { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/mother-with-little-son-bathroom_1157-20455.jpg", imageAlt: "Minimalist bathroom setting" },
            { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/handle-newborn-hands-grandmother-closeup_169016-37570.jpg", imageAlt: "Parent and child hand holding" },
            { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/little-boy-blowing-nose_23-2148518660.jpg", imageAlt: "Soft texture baby wipe" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Families"
          description="Recommended by pediatricians and loved by parents everywhere."
          names={["Parenting Magazine", "BabyCenter", "MamaDaily", "Healthline", "Newborn Care Review"]}
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Our Essential Range"
          description="Designed for maximum gentleness, free from parabens, chlorine, and fragrances."
          tag="Bestsellers"
          tagIcon={Award}
          tagAnimation="slide-up"
          products={[
            { id: "1", name: "Sensitive Pure Wipes", price: "$9.99", variant: "Pack of 3", imageSrc: "http://img.b2bpic.net/free-photo/birthday-background_23-2148031001.jpg" },
            { id: "2", name: "Bamboo Organic Wipes", price: "$12.99", variant: "Pack of 5", imageSrc: "http://img.b2bpic.net/free-photo/top-view-different-brushes-arrangement_23-2148743090.jpg" },
            { id: "3", name: "Travel Pack Duo", price: "$6.99", variant: "2 Packs", imageSrc: "http://img.b2bpic.net/free-photo/white-package-wet-wipes-isolated_187299-46184.jpg" },
            { id: "4", name: "Bulk Family Bundle", price: "$29.99", variant: "12 Packs", imageSrc: "http://img.b2bpic.net/free-photo/birthday-background_23-2148031094.jpg" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="ingredients" data-section="ingredients">
        <FeatureCardSix
          title="Purity You Can Feel"
          description="We believe in clean ingredients that protect your baby’s skin barrier without compromise."
          tag="Pure Promise"
          tagIcon={Beaker}
          tagAnimation="slide-up"
          features={[
            { title: "Organic Aloe Vera", description: "Soothing hydration for delicate skin surfaces.", imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-green-leaves-aloe-plant_181624-12368.jpg" },
            { title: "Plant-Based Fibers", description: "Compostable materials for a cleaner environment.", imageSrc: "http://img.b2bpic.net/free-photo/carpet-texture_1203-1048.jpg" },
            { title: "Dermatologically Tested", description: "Validated by professionals to prevent irritation.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-white-pill-plastic-blister-pack_9975-133834.jpg" }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="influencers" data-section="influencers">
        <FeatureCardOne
          title="Real Parents, Real Stories"
          description="See why mothers trust BachchaWipes for their daily routine."
          tag="Community"
          tagIcon={Heart}
          tagAnimation="slide-up"
          features={[
            { title: "Sarah M.", description: "Gentle enough for my newborn's skin.", imageSrc: "http://img.b2bpic.net/free-photo/mother-with-her-baby-boy-celebrating-christmas_1303-25569.jpg" },
            { title: "Jessica L.", description: "The only wipes that don't cause redness.", imageSrc: "http://img.b2bpic.net/free-photo/innocent-closeup-mommy-beautiful-body_1304-924.jpg" },
            { title: "Chloe R.", description: "Perfect for sensitive skin, love them!", imageSrc: "http://img.b2bpic.net/free-photo/baby-doing-his-first-steps_23-2149235223.jpg" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="The BachchaWipes Standard"
          description="Proven protection for your little one's sensitive skin."
          tag="Commitment"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "100%", title: "Chemical Free", description: "No parabens or harsh synthetics.", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-plants-tubes-book_23-2148785045.jpg" },
            { id: "2", value: "99.9%", title: "Moisture Retention", description: "Stays fresh throughout the package.", imageSrc: "http://img.b2bpic.net/free-photo/water-drops-rubbish-with-fish_23-2147852414.jpg" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Parenting & Care Journal"
          description="Helpful tips for raising happy, healthy babies."
          tag="Resources"
          tagIcon={BookOpen}
          tagAnimation="slide-up"
          blogs={[
            { id: "1", category: "Care", title: "Tips for Diaper Rash", excerpt: "How to prevent and treat irritation quickly.", imageSrc: "http://img.b2bpic.net/free-photo/uniform-emotions-white-family-kid-young_1291-96.jpg", authorName: "Dr. Emily", authorAvatar: "http://img.b2bpic.net/free-photo/portrait-female-health-worker_23-2148980790.jpg", date: "Jan 2026" },
            { id: "2", category: "Guides", title: "Newborn Bath Basics", excerpt: "A step-by-step guide to gentle cleaning.", imageSrc: "http://img.b2bpic.net/free-photo/sweet-baby-girl-bathroom_1328-2531.jpg", authorName: "Sarah M.", authorAvatar: "http://img.b2bpic.net/free-photo/lovely-young-couple-hugging_1098-1538.jpg", date: "Feb 2026" },
            { id: "3", category: "Lifestyle", title: "Eco-Friendly Parenting", excerpt: "Small steps for a sustainable future.", imageSrc: "http://img.b2bpic.net/free-photo/white-t-shirt-with-diy-design-painted-with-colors_23-2150564479.jpg", authorName: "James P.", authorAvatar: "http://img.b2bpic.net/free-photo/father-daughter-laughing_23-2147615920.jpg", date: "Mar 2026" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="We are here to help with your baby care journey."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/flat-lay-birthday-composition-with-copyspace_23-2148109230.jpg"
          faqs={[
            { id: "1", title: "Are they flushable?", content: "Our wipes are best disposed of in trash cans." },
            { id: "2", title: "Can I use on face?", content: "Yes, they are pH balanced for facial use." },
            { id: "3", title: "Shipping info?", content: "Free shipping on orders over $50." }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Contact Support"
          description="We love to hear from our community!"
          inputs={[
            { name: "name", type: "text", placeholder: "Name", required: true },
            { name: "email", type: "email", placeholder: "Email", required: true }
          ]}
          textarea={{ name: "message", placeholder: "How can we help?", required: true }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/interior-kids-room-decoration-with-toys_23-2149096023.jpg"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="BachchaWipes"
          columns={[
            { items: [{ label: "Shop" }, { label: "About" }, { label: "FAQ" }] },
            { items: [{ label: "Shipping" }, { label: "Returns" }, { label: "Privacy" }] }
          ]}
        />
      </div>
      </ReactLenis>
    </ThemeProvider>
  );
}