"use client"

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Award, Heart, Camera } from 'lucide-react';

export default function LandingPage() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            { name: "Story", id: "story" },
            { name: "Showcase", id: "products" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", onClick: () => scrollTo("products") }}
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
            { text: "Shop Now", onClick: () => scrollTo("products") },
            { text: "Explore Products", onClick: () => scrollTo("products") }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/close-up-blue-marshmallows_23-2147748095.jpg", imageAlt: "Premium baby wipes pack" },
            { id: "2", imageSrc: "https://img.b2bpic.net/free-photo/set-with-2-hand-holding-wipes-napkins-makeup-remove_633478-558.jpg?id=26076798", imageAlt: "Happy baby lifestyle" },
            { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/sponge-stars-soap-bar-sanitizer-soap-dispenser-blue-background_23-2147940458.jpg", imageAlt: "Close up of baby care products" },
            { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/mother-with-little-son-bathroom_1157-20455.jpg", imageAlt: "Minimalist bathroom setting" },
            { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/handle-newborn-hands-grandmother-closeup_169016-37570.jpg", imageAlt: "Parent and child hand holding" },
            { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/little-boy-blowing-nose_23-2148518660.jpg", imageAlt: "Soft texture baby wipe" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="story" data-section="story">
        <SplitAbout
          title="Our Editorial Story"
          description="Born from a commitment to purity, BachchaWipes redefines standard baby care with an uncompromising aesthetic and dermatological rigor."
          tag="Brand Vision"
          tagIcon={Heart}
          imagePosition="left"
          imageSrc="https://img.b2bpic.net/free-photo/closeup-woman-using-antibacterial-wipe-cleaning-hands-bathroom_637285-4741.jpg?id=26143248"
          bulletPoints={[
            { title: "Ethical Sourcing", description: "Materials harvested with sustainability in mind." },
            { title: "Purity Standard", description: "Clinically clean formulation for sensitive skin." }
          ]}
          textboxLayout="split"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Product Showcase"
          description="Explore our curated collection of premium care essentials, designed to balance visual elegance with unmatched skin comfort."
          tag="Premium Range"
          tagIcon={Award}
          animationType="slide-up"
          products={[
            { id: "1", name: "Sensitive Pure", price: "", imageSrc: "http://img.b2bpic.net/free-photo/birthday-background_23-2148031001.jpg" },
            { id: "2", name: "Bamboo Organic", price: "", imageSrc: "http://img.b2bpic.net/free-photo/top-view-different-brushes-arrangement_23-2148743090.jpg" },
            { id: "3", name: "Travel Wipes", price: "", imageSrc: "http://img.b2bpic.net/free-photo/white-package-wet-wipes-isolated_187299-46184.jpg" }
          ]}
          gridVariant="asymmetric-60-wide-40-narrow"
          textboxLayout="inline-image"
          useInvertedBackground={false}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureCardOne
          title="Visual Gallery"
          description="A curated aesthetic look into the serene world of our baby care routine."
          tag="Lifestyle"
          tagIcon={Camera}
          features={[
            { title: "Gentle Moments", description: "Soft textures, quiet focus.", imageSrc: "http://img.b2bpic.net/free-photo/sweet-baby-girl-bathroom_1328-2531.jpg" },
            { title: "Pure Elements", description: "Clean ingredients, minimal design.", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-plants-tubes-book_23-2148785045.jpg" },
            { title: "Daily Care", description: "Refined care for daily routines.", imageSrc: "http://img.b2bpic.net/free-photo/innocent-closeup-mommy-beautiful-body_1304-924.jpg" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Connect With Us"
          description="Join our circle of premium care."
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
            { items: [{ label: "Shop", onClick: () => scrollTo("products") }, { label: "Story", onClick: () => scrollTo("story") }, { label: "Gallery", onClick: () => scrollTo("gallery") }] },
            { items: [{ label: "Contact", onClick: () => scrollTo("contact") }, { label: "Privacy" }] }
          ]}
        />
      </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
