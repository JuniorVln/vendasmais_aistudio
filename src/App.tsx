/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Evolution } from './components/Evolution';
import { Diferenciais } from './components/Diferenciais';
import { Depoimentos } from './components/Depoimentos';
import { Pricing } from './components/Pricing';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <Features />
      <Diferenciais />
      <Depoimentos />
      <Pricing />
      <Community />
      <Evolution />
      <Footer />
    </div>
  );
}
