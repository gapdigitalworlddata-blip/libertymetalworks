'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  code: string;
  material: string;
  size: string;
  finish: string;
  category: string;
  subcategory: string;
}

const STANDARD_FINISHES = 'Brushed Brass · Antique Brass · Oil Rubbed Bronze · Brushed Nickel · Polished Brass · Polished Chrome · Black Powder-Coat · Black Nickel · Red Brass · Bronze Patina · Dual Tone';
const GATE_FINISHES = 'Matte Black · Oil Black · Rustic · Beewax';
const WINDOW_FINISHES = 'Matte Black · Matte Brass · Matte Silver · Matte Copper · Black Nickel · Two-Tone';
const HOOK_FINISHES = 'Matte Black · Matte Brass · Matte Silver · Matte Copper · Black Nickel · Two-Tone';
const BELL_FINISHES = 'Matte Black · Matte Brass · Polished Brass · Polished Chrome';
const CASTOR_FINISHES = 'Matte Black · Matte Brass · Matte Silver · Matte Copper · Black Nickel · Two-Tone';
const EASEL_FINISHES = 'Matte Black · Matte Brass · Polished Brass · Polished Chrome';

const allProducts: Product[] = [
  // ── CABINET KNOBS – BRASS ──
  { id: 'kb-tkb505', name: 'Cabinet Handle', code: 'TKB 505', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-tkb506', name: 'Cabinet Handle', code: 'TKB 506', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-1', name: 'Knurled Brass Cabinet Knob', code: 'KB 1', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-83', name: 'Square Pyramid Cabinet Knob', code: 'KB 83', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-6', name: 'Round Cabinet Knob', code: 'KB 6', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-2', name: 'Cylindrical Knurled Cabinet Knob', code: 'KB 2', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-84', name: 'Round Cabinet Knob with Gold Centre', code: 'KB 84', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-tkb504', name: 'T-Bar Knurled Cabinet Handle', code: 'TKB 504', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-3', name: 'Round Knurled Cabinet Knob', code: 'KB 3', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-85', name: 'Octagonal Cabinet Knob', code: 'KB 85', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-9', name: 'Round Cabinet Knob', code: 'KB 9', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-4', name: 'Small Brass Cabinet Knob', code: 'KB 4', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-5', name: 'Spherical Cabinet Knob', code: 'KB 5', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  { id: 'kb-10', name: 'Round Knurled Cabinet Knob', code: 'KB 10', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass' },
  // ── CABINET KNOBS – BRASS 38mm ──
  { id: 'kb-72', name: 'Cabinet Knob 38mm', code: 'KB 72', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-73', name: 'Cabinet Knob 38mm', code: 'KB 73', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-74', name: 'Cabinet Knob 38mm', code: 'KB 74', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-75', name: 'Cabinet Knob 38mm', code: 'KB 75', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-76', name: 'Cabinet Knob 38mm', code: 'KB 76', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-77', name: 'Cabinet Knob 38mm', code: 'KB 77', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-78', name: 'Cabinet Knob 38mm', code: 'KB 78', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-79', name: 'Cabinet Knob 38mm', code: 'KB 79', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-80', name: 'Cabinet Knob 38mm', code: 'KB 80', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-81', name: 'Cabinet Knob 38mm', code: 'KB 81', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  { id: 'kb-19', name: 'Cabinet Knob 38mm', code: 'KB 19', material: 'Brass', size: '38mm', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Brass 38mm' },
  // ── CABINET KNOBS – IRON ──
  { id: 'kb-86', name: 'Iron Cabinet Knob', code: 'KB 86', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-87', name: 'Iron Cabinet Knob', code: 'KB 87', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-88', name: 'Iron Cabinet Knob', code: 'KB 88', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-89', name: 'Iron Cabinet Knob', code: 'KB 89', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-90', name: 'Iron Cabinet Knob', code: 'KB 90', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-91', name: 'Iron Cabinet Knob', code: 'KB 91', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-92', name: 'Iron Cabinet Knob', code: 'KB 92', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-93', name: 'Iron Cabinet Knob', code: 'KB 93', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-94', name: 'Iron Cabinet Knob', code: 'KB 94', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-95', name: 'Iron Cabinet Knob', code: 'KB 95', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-96', name: 'Iron Cabinet Knob', code: 'KB 96', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-97', name: 'Iron Cabinet Knob', code: 'KB 97', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-98', name: 'Iron Cabinet Knob', code: 'KB 98', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-99', name: 'Iron Cabinet Knob', code: 'KB 99', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  { id: 'kb-100', name: 'Iron Cabinet Knob', code: 'KB 100', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Iron' },
  // ── CABINET KNOBS – JUTE ──
  { id: 'kb-11', name: 'Jute Cabinet Knob', code: 'KB 11', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-14', name: 'Jute Cabinet Knob', code: 'KB 14', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-43', name: 'Jute Cabinet Knob', code: 'KB 43', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-44', name: 'Jute Cabinet Knob', code: 'KB 44', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-45', name: 'Jute Cabinet Knob', code: 'KB 45', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-46', name: 'Jute Cabinet Knob', code: 'KB 46', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-47', name: 'Jute Cabinet Knob', code: 'KB 47', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-48', name: 'Jute Cabinet Knob', code: 'KB 48', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-49', name: 'Jute Cabinet Knob', code: 'KB 49', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-50', name: 'Jute Cabinet Knob', code: 'KB 50', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-51', name: 'Jute Cabinet Knob', code: 'KB 51', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  { id: 'kb-52', name: 'Jute Cabinet Knob', code: 'KB 52', material: 'Jute', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Jute' },
  // ── CABINET KNOBS – CERAMIC SERIES 1 ──
  { id: 'kb-65', name: 'Clock Face Ceramic Knob', code: 'KB 65', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-66', name: 'Deer Head Ceramic Knob', code: 'KB 66', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-67', name: 'Vintage Stamp Ceramic Knob', code: 'KB 67', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-68', name: 'Bird & Floral Ceramic Knob', code: 'KB 68', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-69', name: 'Blue & White Polka Dot Ceramic Knob', code: 'KB 69', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-70', name: 'Blue & White Striped Ceramic Knob', code: 'KB 70', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-71', name: 'Red & White Polka Dot Ceramic Knob', code: 'KB 71', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-7', name: 'Striped Letter Ceramic Knob', code: 'KB 7', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-20', name: 'Purple Rose Ceramic Knob', code: 'KB 20', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-82', name: 'Ornate Gold & White Ceramic Knob', code: 'KB 82', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  // ── CABINET KNOBS – CERAMIC SERIES 2 ──
  { id: 'kb-53', name: 'Colourful Button Pattern Ceramic Knob', code: 'KB 53', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-54', name: 'Pink Floral Ceramic Knob', code: 'KB 54', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-55', name: 'Red & White Striped Ceramic Knob', code: 'KB 55', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-56', name: 'Black & White Checkered Ceramic Knob', code: 'KB 56', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-57', name: 'Black & White Striped Ceramic Knob', code: 'KB 57', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-58', name: 'Green Floral Ceramic Knob', code: 'KB 58', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-59', name: 'Purple Floral Ceramic Knob', code: 'KB 59', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-60', name: 'Blue Dome Ceramic Knob', code: 'KB 60', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-61', name: 'Brown Marbled Ceramic Knob', code: 'KB 61', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-62', name: 'Black & Gold Patterned Ceramic Knob', code: 'KB 62', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-63', name: 'Hexagonal Jewelled Ceramic Knob', code: 'KB 63', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  { id: 'kb-64', name: 'Square Jewelled Ceramic Knob', code: 'KB 64', material: 'Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Ceramic' },
  // ── CABINET KNOBS – GLASS ──
  { id: 'kb-15', name: 'Blue Faceted Glass Knob', code: 'KB 15', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-16', name: 'Green Flower Glass Knob', code: 'KB 16', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-27', name: 'Blue Ribbed Glass Knob', code: 'KB 27', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-28', name: 'Orange Flower Glass Knob', code: 'KB 28', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-29', name: 'Light Green Faceted Glass Knob', code: 'KB 29', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-30', name: 'Purple Faceted Glass Knob', code: 'KB 30', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-31', name: 'Yellow Faceted Glass Knob', code: 'KB 31', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-32', name: 'Green & Pink Flower Glass Knob', code: 'KB 32', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-33', name: 'Amber Patterned Glass Knob', code: 'KB 33', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-34', name: 'Yellow Flower Glass Knob', code: 'KB 34', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  { id: 'kb-35', name: 'Dark Blue Faceted Glass Knob', code: 'KB 35', material: 'Glass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Glass' },
  // ── CABINET KNOBS – RESIN & BRASS ──
  { id: 'kb-36', name: 'Red Pattern Resin & Brass Knob', code: 'KB 36', material: 'Resin & Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Resin & Brass' },
  { id: 'kb-37', name: 'Blue & Gold Diagonal Stripe Knob', code: 'KB 37', material: 'Resin & Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Resin & Brass' },
  { id: 'kb-38', name: 'Smooth Purple Resin Knob', code: 'KB 38', material: 'Resin & Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Resin & Brass' },
  { id: 'kb-39', name: 'Red Floral Resin Knob', code: 'KB 39', material: 'Resin & Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Resin & Brass' },
  { id: 'kb-40', name: 'Colourful Mosaic Resin Knob', code: 'KB 40', material: 'Resin & Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Resin & Brass' },
  { id: 'kb-41', name: 'Gold Dragonfly on Cream Resin Knob', code: 'KB 41', material: 'Resin & Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Resin & Brass' },
  { id: 'kb-42', name: 'Cylindrical Marble & Wood Knob', code: 'KB 42', material: 'Resin & Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Resin & Brass' },
  // ── CABINET KNOBS – BONE, BRASS & WOOD ──
  { id: 'kb-12', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 12', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-13', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 13', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-17', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 17', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-18', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 18', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-21', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 21', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-22', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 22', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-23', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 23', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-24', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 24', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-25', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 25', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  { id: 'kb-26', name: 'Bone, Brass & Wood Cabinet Knob', code: 'KB 26', material: 'Bone, Brass & Wood', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Knobs – Bone, Brass & Wood' },
  // ── CABINET PULLS ──
  { id: 'cp-1', name: 'Cabinet Pull', code: 'CP 1', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-2', name: 'Cabinet Pull', code: 'CP 2', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-3', name: 'Cabinet Pull', code: 'CP 3', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-4', name: 'Cabinet Pull', code: 'CP 4', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-5', name: 'Cabinet Pull', code: 'CP 5', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-6', name: 'Cabinet Pull', code: 'CP 6', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-7', name: 'Cabinet Pull', code: 'CP 7', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-8', name: 'Cabinet Pull', code: 'CP 8', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-9', name: 'Ornate Brass Cabinet Pull', code: 'CP 9', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-10', name: 'Crown Motif Brass Cabinet Pull', code: 'CP 10', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-11', name: 'Floral Brass Cup Pull', code: 'CP 11', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-12', name: 'Oval Centre Brass Cabinet Pull', code: 'CP 12', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-13', name: 'Ornate Brass Cabinet Pull', code: 'CP 13', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-14', name: 'Brass Cup Pull', code: 'CP 14', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-15', name: 'Scrollwork Brass Cup Pull', code: 'CP 15', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-16', name: 'Lion Head Brass Cabinet Pull', code: 'CP 16', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-17', name: 'Black Ornate Cup Pull', code: 'CP 17', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-18', name: 'Black Shell-Shaped Cup Pull', code: 'CP 18', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-19', name: 'Black Textured Cup Pull', code: 'CP 19', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-20', name: 'Basket Motif Brass Cabinet Pull', code: 'CP 20', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-21', name: 'Cabinet Pull', code: 'CP 21', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-22', name: 'Cabinet Pull', code: 'CP 22', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-23', name: 'Cabinet Pull', code: 'CP 23', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-24', name: 'Cabinet Pull', code: 'CP 24', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-25', name: 'Cabinet Pull', code: 'CP 25', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-26', name: 'Cabinet Pull', code: 'CP 26', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-27', name: 'Cabinet Pull', code: 'CP 27', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-28', name: 'Cabinet Pull', code: 'CP 28', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-29', name: 'Cabinet Pull', code: 'CP 29', material: 'Brass, Iron, Aluminium, Zinc & Ceramic', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  { id: 'cp-30', name: 'Brass Cup Pull Handle', code: 'CP 30', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Pulls' },
  // ── ESCUTCHEONS ──
  { id: 'esc-1', name: 'Brass Escutcheon', code: 'ESC 1', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Escutcheons' },
  { id: 'esc-2', name: 'Brass Escutcheon', code: 'ESC 2', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Escutcheons' },
  { id: 'esc-3', name: 'Brass Escutcheon', code: 'ESC 3', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Escutcheons' },
  { id: 'esc-4', name: 'Brass Escutcheon', code: 'ESC 4', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Escutcheons' },
  { id: 'esc-5', name: 'Brass Escutcheon', code: 'ESC 5', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Escutcheons' },
  { id: 'esc-6', name: 'Brass Escutcheon', code: 'ESC 6', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Escutcheons' },
  { id: 'esc-7', name: 'Brass Escutcheon', code: 'ESC 7', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Escutcheons' },
  // ── CABINET HINGES ──
  { id: 'hng-1', name: 'Cabinet Hinge', code: 'HNG 1', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Hinges' },
  { id: 'hng-2', name: 'Cabinet Hinge', code: 'HNG 2', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Hinges' },
  { id: 'hng-3', name: 'Cabinet Hinge', code: 'HNG 3', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Hinges' },
  // ── CABINET BRACKETS ──
  { id: 'brk-1', name: 'Cabinet Bracket', code: 'BRK 1', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Brackets' },
  { id: 'brk-2', name: 'Cabinet Bracket', code: 'BRK 2', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Cabinet Hardware', subcategory: 'Cabinet Brackets' },
  // ── LEVER HANDLES ──
  { id: 'lh-1', name: 'Lever Handle', code: 'LH 1', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-2', name: 'Lever Handle', code: 'LH 2', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-3', name: 'Lever Handle with Keyhole Plate', code: 'LH 3', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-4', name: 'Lever Handle', code: 'LH 4', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-5', name: 'Lever Handle', code: 'LH 5', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-6', name: 'Lever Handle on Decorative Backplate', code: 'LH 6', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-7', name: 'Gothic Style Lever Handle', code: 'LH 7', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-8', name: 'Curved Lever Handle on Rose', code: 'LH 8', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-9', name: 'Lever Handle with Matching Escutcheons', code: 'LH 9', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-10', name: 'Curved Lever Handle', code: 'LH 10', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-11', name: 'Ornate Scroll Lever Handle', code: 'LH 11', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-12', name: 'Brass Lever Handle on Ornate Backplate', code: 'LH 12', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-13', name: 'Hammered Finish Lever Handle', code: 'LH 13', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-14', name: 'Lever Handle on Long Backplate', code: 'LH 14', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-15', name: 'Pair of Lever Handles on Long Backplates', code: 'LH 15', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-16', name: 'Lever Handle Set with Backplate & Rose', code: 'LH 16', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-17', name: 'Pair of Lever Handles on Round Roses', code: 'LH 17', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-18', name: 'Knurled Lever Handle on Round Rose', code: 'LH 18', material: 'Iron', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  { id: 'lh-19', name: 'Lever Handle on Rectangular Backplate', code: 'LH 19', material: 'Brass, Iron, Aluminium, Zinc', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Lever Handles' },
  // ── PUSH/PULL HANDLES ──
  { id: 'ph-515', name: 'Gold Knurled Push/Pull Handle', code: 'PH 515', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-516', name: 'Black Ribbed Push/Pull Handle', code: 'PH 516', material: 'Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-517', name: 'Gold Knurled Push/Pull Handle', code: 'PH 517', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-518', name: 'Slim Polished Chrome Push/Pull Handle', code: 'PH 518', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-519', name: 'Antique Brass Segmented Push/Pull Handle', code: 'PH 519', material: 'Brass', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-8', name: 'Curved Pull Handle', code: 'PH 8', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-9', name: 'Black Rustic Pull Handle', code: 'PH 9', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-10', name: 'Black Rustic Pull Handle', code: 'PH 10', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-11', name: 'Black Rustic Pull Handle', code: 'PH 11', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-12', name: 'Black Rustic Pull Handle', code: 'PH 12', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-13', name: 'Black Ornate Pull Handle with Long Backplate', code: 'PH 13', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-17', name: 'Stainless Steel Ladder Pull Handle', code: 'PH 17', material: 'Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-18', name: 'Wrought Iron Pull Handle with Decorative Backplate', code: 'PH 18', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-19', name: 'Twisted Wrought Iron Pull Handle', code: 'PH 19', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  { id: 'ph-22', name: 'Stainless Steel Pull Handle on Square Backplate', code: 'PH 22', material: 'Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push/Pull Handles' },
  // ── DOOR KNOBS ──
  { id: 'dkb-1', name: 'Wooden Door Knob with Brass Base', code: 'DKB 1', material: 'Wood & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knobs' },
  { id: 'dkb-2', name: 'Wooden Door Knob with Antique Brass Base', code: 'DKB 2', material: 'Wood & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knobs' },
  { id: 'dkb-3', name: 'Dark Ribbed Wooden Door Knob', code: 'DKB 3', material: 'Wood & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knobs' },
  { id: 'dkb-4', name: 'Black Hammered Iron Door Knob', code: 'DKB 4', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knobs' },
  { id: 'dkb-5', name: 'Oil Rubbed Bronze Door Knob', code: 'DKB 5', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knobs' },
  // ── RIM LOCK ──
  { id: 'rim-lock', name: 'Rim Lock with Brass Keys', code: 'RIM LOCK', material: 'Iron & Brass', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Rim Lock' },
  // ── DOOR BOLTS ──
  { id: 'db-1', name: 'Door Bolt', code: 'DB 1', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Bolts' },
  { id: 'db-2', name: 'Door Bolt', code: 'DB 2', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Bolts' },
  { id: 'db-3', name: 'Door Bolt', code: 'DB 3', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Bolts' },
  { id: 'db-4', name: 'Door Bolt', code: 'DB 4', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Bolts' },
  // ── BELL PUSHES ──
  { id: 'bp-1', name: 'Bell Push', code: 'BP 1', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-2', name: 'Bell Push', code: 'BP 2', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-3', name: 'Bell Push', code: 'BP 3', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-4', name: 'Bell Push', code: 'BP 4', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-5', name: 'Bell Push', code: 'BP 5', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-6', name: 'Bell Push', code: 'BP 6', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-7', name: 'Bell Push', code: 'BP 7', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-8', name: 'Bell Push', code: 'BP 8', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-9', name: 'Bell Push', code: 'BP 9', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  { id: 'bp-10', name: 'Bell Push', code: 'BP 10', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Bell Pushes' },
  // ── DOOR HINGES ──
  { id: 'hg-1', name: 'Door Hinge', code: 'HG 1', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Hinges' },
  { id: 'hg-2', name: 'Door Hinge', code: 'HG 2', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Hinges' },
  { id: 'hg-3', name: 'Door Hinge', code: 'HG 3', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Hinges' },
  { id: 'hg-4', name: 'Door Hinge', code: 'HG 4', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Hinges' },
  { id: 'hg-5', name: 'Door Hinge', code: 'HG 5', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Hinges' },
  { id: 'hg-6', name: 'Door Hinge', code: 'HG 6', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Hinges' },
  { id: 'hg-8', name: 'Door Hinge', code: 'HG 8', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Hinges' },
  { id: 'hg-9', name: 'Door Hinge', code: 'HG 9', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Hinges' },
  // ── DOOR KNOCKERS – BRASS ──
  { id: 'dk-9', name: 'Ornate Female Face Door Knocker', code: 'DK 9', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knockers – Brass' },
  { id: 'dk-10', name: 'Lion Head Door Knocker', code: 'DK 10', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knockers – Brass' },
  { id: 'dk-11', name: 'Horse Head & Horseshoe Door Knocker', code: 'DK 11', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knockers – Brass' },
  { id: 'dk-12', name: 'Ornate Bearded Face Door Knocker', code: 'DK 12', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knockers – Brass' },
  { id: 'dk-13', name: 'Fox Head Door Knocker', code: 'DK 13', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knockers – Brass' },
  { id: 'dk-14', name: 'Eagle with Shield Door Knocker', code: 'DK 14', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knockers – Brass' },
  { id: 'dk-15', name: 'Bird on Branch Door Knocker', code: 'DK 15', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knockers – Brass' },
  { id: 'dk-16', name: 'Hand Holding Ball Door Knocker', code: 'DK 16', material: 'Brass', size: 'Standard', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Knockers – Brass' },
  // ── NUMBERS, ALPHABETS & SIGNS ──
  { id: 'na-1', name: 'Alphabet Set', code: 'NA 1', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Numbers, Alphabets & Signs' },
  { id: 'na-2', name: 'Oval Door Number', code: 'NA 2', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Numbers, Alphabets & Signs' },
  { id: 'na-3', name: 'Number Set', code: 'NA 3', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Numbers, Alphabets & Signs' },
  { id: 'na-4', name: 'Welcome Hanging Sign', code: 'NA 4', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Numbers, Alphabets & Signs' },
  { id: 'na-5', name: 'Rectangular Door Number with Braille', code: 'NA 5', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Numbers, Alphabets & Signs' },
  { id: 'na-6', name: '3D Door Number on Plaque', code: 'NA 6', material: 'Brass, Iron & Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Numbers, Alphabets & Signs' },
  // ── DOOR STOPPERS ──
  { id: 'ds-1', name: 'Door Stopper', code: 'DS 1', material: 'Brass, Aluminium, Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Stoppers' },
  { id: 'ds-2', name: 'Door Stopper', code: 'DS 2', material: 'Brass, Aluminium, Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Stoppers' },
  { id: 'ds-3', name: 'Door Stopper', code: 'DS 3', material: 'Brass, Aluminium, Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Stoppers' },
  { id: 'ds-4', name: 'Door Stopper', code: 'DS 4', material: 'Brass, Aluminium, Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Stoppers' },
  { id: 'ds-5', name: 'Door Stopper', code: 'DS 5', material: 'Brass, Aluminium, Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Stoppers' },
  { id: 'ds-6', name: 'Door Stopper', code: 'DS 6', material: 'Brass, Aluminium, Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Stoppers' },
  { id: 'ds-7', name: 'Door Stopper', code: 'DS 7', material: 'Brass, Aluminium, Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Stoppers' },
  { id: 'ds-8', name: 'Door Stopper', code: 'DS 8', material: 'Brass, Aluminium, Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Door Stoppers' },
  // ── LETTER PLATES ──
  { id: 'lp-1', name: 'Black Iron Letter Plate with Fleur-de-lis Ends', code: 'LP 1', material: 'Iron & Brass', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Letter Plates' },
  { id: 'lp-2', name: 'Polished Brass Letter Plate with Decorative Border', code: 'LP 2', material: 'Iron & Brass', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Letter Plates' },
  // ── PUSH PLATES ──
  { id: 'pp-1', name: 'Ornate Rectangular Brass Push Plate', code: 'PP 1', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push Plates' },
  { id: 'pp-2', name: 'Black Rectangular Push Plate with Decorative Cutouts', code: 'PP 2', material: 'Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push Plates' },
  { id: 'pp-3', name: 'Rectangular Brass Push Plate with Floral Engraving', code: 'PP 3', material: 'Brass', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push Plates' },
  { id: 'pp-4', name: 'Oval Ornate Brass Push Plate', code: 'PP 4', material: 'Brass', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push Plates' },
  { id: 'pp-5', name: 'Oval Ornate Brass Push Plate with Geometric Patterns', code: 'PP 5', material: 'Brass', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push Plates' },
  { id: 'pp-6', name: 'Decorative Push Plates (Set of 4 Finishes)', code: 'PP 6', material: 'Brass & Iron', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Door Hardware', subcategory: 'Push Plates' },
  // ── GATE PUSH/PULL HANDLES ──
  { id: 'gph-1', name: 'Gate Push/Pull Handle', code: 'GPH 1', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-2', name: 'Gate Push/Pull Handle', code: 'GPH 2', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-3', name: 'Gate Push/Pull Handle', code: 'GPH 3', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-4', name: 'Gate Push/Pull Handle', code: 'GPH 4', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-5', name: 'Gate Push/Pull Handle', code: 'GPH 5', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-6', name: 'Gate Push/Pull Handle', code: 'GPH 6', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-7', name: 'Gate Push/Pull Handle', code: 'GPH 7', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-8', name: 'Gate Push/Pull Handle', code: 'GPH 8', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-9', name: 'Gate Handle with Thumb Latch', code: 'GPH 9', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-10', name: 'Decorative Gate Handle with Curved Profile', code: 'GPH 10', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-11', name: 'Decorative Gate Handle with Textured Finish', code: 'GPH 11', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-12', name: 'Gate Handle with Textured Finish & Rounded Ends', code: 'GPH 12', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'gph-13', name: 'Curved Gate Handle', code: 'GPH 13', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'ph-5', name: 'Double-Bar Gate Handle', code: 'PH 5', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'ph-14', name: 'Twisted Gate Push/Pull Handle', code: 'PH 14', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'ph-15', name: 'Rustic Bronze-Finish Gate Handle', code: 'PH 15', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'ph-16', name: 'Gate Push/Pull Handle', code: 'PH 16', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'ph-20', name: 'Rustic Bronze Gate Handle with Decorative Ends', code: 'PH 20', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  { id: 'ph-21', name: 'Vertical Bar Gate Handle', code: 'PH 21', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Push/Pull Handles' },
  // ── GATE DOOR KNOCKERS – IRON ──
  { id: 'dk-1', name: 'Iron Gate Door Knocker', code: 'DK 1', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-2', name: 'Iron Gate Door Knocker', code: 'DK 2', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-3', name: 'Iron Gate Door Knocker', code: 'DK 3', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-4', name: 'Iron Gate Door Knocker', code: 'DK 4', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-5', name: 'Iron Gate Door Knocker', code: 'DK 5', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-6', name: 'Iron Gate Door Knocker', code: 'DK 6', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-7', name: 'Iron Gate Door Knocker', code: 'DK 7', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-8', name: 'Iron Gate Door Knocker', code: 'DK 8', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-17', name: 'Iron Gate Door Knocker', code: 'DK 17', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-18', name: 'Iron Gate Door Knocker', code: 'DK 18', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  { id: 'dk-19', name: 'Iron Gate Door Knocker', code: 'DK 19', material: 'Iron', size: 'Standard & Customizable', finish: GATE_FINISHES, category: 'Gate Hardware', subcategory: 'Gate Door Knockers – Iron' },
  // ── WINDOW FASTENERS ──
  { id: 'wf-1', name: 'Brass Window Fastener with White Knob', code: 'WF 1', material: 'Brass & Iron', size: 'Standard & Customizable', finish: WINDOW_FINISHES, category: 'Window Hardware', subcategory: 'Window Fasteners' },
  { id: 'wf-2', name: 'Curved Brass Window Handle', code: 'WF 2', material: 'Brass & Iron', size: 'Standard & Customizable', finish: WINDOW_FINISHES, category: 'Window Hardware', subcategory: 'Window Fasteners' },
  { id: 'wf-3', name: 'Brass Window Latch', code: 'WF 3', material: 'Brass & Iron', size: 'Standard & Customizable', finish: WINDOW_FINISHES, category: 'Window Hardware', subcategory: 'Window Fasteners' },
  { id: 'wf-4', name: 'Ornate Brass Window Fastener', code: 'WF 4', material: 'Brass & Iron', size: 'Standard & Customizable', finish: WINDOW_FINISHES, category: 'Window Hardware', subcategory: 'Window Fasteners' },
  { id: 'wf-5', name: 'Black Window Fastener', code: 'WF 5', material: 'Iron', size: 'Standard & Customizable', finish: WINDOW_FINISHES, category: 'Window Hardware', subcategory: 'Window Fasteners' },
  { id: 'wf-6', name: 'Window Hardware Collection', code: 'WF 6', material: 'Brass & Iron', size: 'Standard & Customizable', finish: WINDOW_FINISHES, category: 'Window Hardware', subcategory: 'Window Fasteners' },
  // ── CASEMENT WINDOW STAY ──
  { id: 'cws-1', name: 'Casement Window Stay', code: 'CASEMENT STAY', material: 'Iron', size: 'Standard & Customizable', finish: WINDOW_FINISHES, category: 'Window Hardware', subcategory: 'Casement Window Stay' },
  // ── SWITCH PLATES ──
  { id: 'sp-1', name: 'Switch Plate', code: 'SP 1', material: 'Brass', size: '4", 6", 8" or Customizable', finish: STANDARD_FINISHES, category: 'Switch Plates', subcategory: 'Switch Plates' },
  { id: 'sp-2', name: 'Switch Plate', code: 'SP 2', material: 'Brass', size: '4", 6", 8" or Customizable', finish: STANDARD_FINISHES, category: 'Switch Plates', subcategory: 'Switch Plates' },
  { id: 'sp-3', name: 'Switch Plate', code: 'SP 3', material: 'Brass', size: '4", 6", 8" or Customizable', finish: STANDARD_FINISHES, category: 'Switch Plates', subcategory: 'Switch Plates' },
  { id: 'sp-4', name: 'Switch Plate', code: 'SP 4', material: 'Brass', size: '4", 6", 8" or Customizable', finish: STANDARD_FINISHES, category: 'Switch Plates', subcategory: 'Switch Plates' },
  { id: 'sp-5', name: 'Switch Plate', code: 'SP 5', material: 'Brass', size: '4", 6", 8" or Customizable', finish: STANDARD_FINISHES, category: 'Switch Plates', subcategory: 'Switch Plates' },
  { id: 'sp-6', name: 'Switch Plate', code: 'SP 6', material: 'Brass', size: '4", 6", 8" or Customizable', finish: STANDARD_FINISHES, category: 'Switch Plates', subcategory: 'Switch Plates' },
  { id: 'sp-7', name: 'Switch Plate', code: 'SP 7', material: 'Brass', size: '4", 6", 8" or Customizable', finish: STANDARD_FINISHES, category: 'Switch Plates', subcategory: 'Switch Plates' },
  { id: 'sp-8', name: 'Switch Plate', code: 'SP 8', material: 'Brass', size: '4", 6", 8" or Customizable', finish: STANDARD_FINISHES, category: 'Switch Plates', subcategory: 'Switch Plates' },
  // ── SHELF BRACKETS ──
  { id: 'sb-1', name: 'Shelf Bracket', code: 'SB 1', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-2', name: 'Shelf Bracket', code: 'SB 2', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-3', name: 'Shelf Bracket', code: 'SB 3', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-4', name: 'Shelf Bracket', code: 'SB 4', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-5', name: 'Shelf Bracket', code: 'SB 5', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-6', name: 'Shelf Bracket', code: 'SB 6', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-7', name: 'Shelf Bracket', code: 'SB 7', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-8', name: 'Shelf Bracket', code: 'SB 8', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-9', name: 'Ornate Brass Shelf Bracket', code: 'SB 9', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-10', name: 'Ornate Brass Shelf Bracket with Leaf Motif', code: 'SB 10', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-11', name: 'Ornate Dark Metal Shelf Bracket with Scrollwork', code: 'SB 11', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-12', name: 'Black Cast Iron Decorative Bracket', code: 'SB 12', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-14', name: 'Ornate Dark Metal Shelf Bracket', code: 'SB 14', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-15', name: 'Ornate Dark Metal Shelf Bracket with Lattice Pattern', code: 'SB 15', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-16', name: 'Dark Metal Shelf Bracket with Scroll Detail', code: 'SB 16', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  { id: 'sb-17', name: 'Polished Brass Shelf Bracket', code: 'SB 17', material: 'Iron', size: 'Standard & Customizable', finish: STANDARD_FINISHES, category: 'Shelf Brackets', subcategory: 'Shelf Brackets' },
  // ── COAT HOOKS ──
  { id: 'hk-20', name: 'Brass Coat Hook', code: 'HK 20', material: 'Brass, Iron, Aluminium & Ceramic', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Hooks', subcategory: 'Coat Hooks' },
  { id: 'hk-21', name: 'Black Iron Coat Hook', code: 'HK 21', material: 'Iron', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Hooks', subcategory: 'Coat Hooks' },
  { id: 'hk-22', name: 'Silver Coat Hook', code: 'HK 22', material: 'Aluminium', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Hooks', subcategory: 'Coat Hooks' },
  { id: 'hk-23', name: 'Black Coat Hook', code: 'HK 23', material: 'Iron', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Hooks', subcategory: 'Coat Hooks' },
  { id: 'hk-24', name: 'Ornate Brass Coat Hook', code: 'HK 24', material: 'Brass', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Hooks', subcategory: 'Coat Hooks' },
  { id: 'hk-25', name: 'Dark Metal Coat Hook', code: 'HK 25', material: 'Iron', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Hooks', subcategory: 'Coat Hooks' },
  { id: 'hk-26', name: 'Ornate Gold Coat Hook', code: 'HK 26', material: 'Brass', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Hooks', subcategory: 'Coat Hooks' },
  { id: 'hk-27', name: 'Small Brass Coat Hook', code: 'HK 27', material: 'Brass', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Hooks', subcategory: 'Coat Hooks' },
  // ── HOOK RAILS ──
  { id: 'hkr-1', name: 'Hook Rail – 4 Brass Hooks on White Board', code: 'HKR 1', material: 'Aluminium & Brass Hooks, MDF Board', size: 'Standard & Customizable', finish: 'Matte Black · Matte Brass · Matte Silver · Black Nickel', category: 'Hooks', subcategory: 'Hook Rails' },
  { id: 'hkr-2', name: 'Hook Rail – 2 Silver Double Hooks on Oval Board', code: 'HKR 2', material: 'Aluminium & Brass Hooks, MDF Board', size: 'Standard & Customizable', finish: 'Matte Black · Matte Brass · Matte Silver · Black Nickel', category: 'Hooks', subcategory: 'Hook Rails' },
  { id: 'hkr-3', name: 'Long Black Hook Rail – 8 Hooks', code: 'HKR 3', material: 'Aluminium & Brass Hooks, MDF Board', size: 'Standard & Customizable', finish: 'Matte Black · Matte Brass · Matte Silver · Black Nickel', category: 'Hooks', subcategory: 'Hook Rails' },
  { id: 'hkr-4', name: 'Black Hook Rail – 4 Hooks', code: 'HKR 4', material: 'Aluminium & Brass Hooks, MDF Board', size: 'Standard & Customizable', finish: 'Matte Black · Matte Brass · Matte Silver · Black Nickel', category: 'Hooks', subcategory: 'Hook Rails' },
  { id: 'hkr-5', name: 'Over-the-Door Silver Hook Rail – 6 Peg Hooks', code: 'HKR 5', material: 'Aluminium & Brass Hooks, MDF Board', size: 'Standard & Customizable', finish: 'Matte Black · Matte Brass · Matte Silver · Black Nickel', category: 'Hooks', subcategory: 'Hook Rails' },
  // ── BATHROOM HARDWARE ──
  { id: 'bh-1', name: 'Bathroom Hardware Set', code: 'BH 1', material: 'Brass & Iron', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Bathroom Hardware', subcategory: 'Bathroom Accessories' },
  { id: 'bh-2', name: 'Brass Bathroom Hardware Set', code: 'BH 2', material: 'Brass & Iron', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Bathroom Hardware', subcategory: 'Bathroom Accessories' },
  { id: 'bh-3', name: 'Bathroom Hardware Set', code: 'BH 3', material: 'Brass & Iron', size: 'Standard & Customizable', finish: HOOK_FINISHES, category: 'Bathroom Hardware', subcategory: 'Bathroom Accessories' },
  { id: 'bhh-1', name: 'Brass Latch & Lock Assembly', code: 'BHH 1', material: 'Brass & Stainless Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Bathroom Hardware', subcategory: 'Latch & Lock' },
  { id: 'bhh-2', name: 'Brass Square Latch Lock', code: 'BHH 2', material: 'Brass & Stainless Steel', size: 'Customizable', finish: STANDARD_FINISHES, category: 'Bathroom Hardware', subcategory: 'Latch & Lock' },
  // ── BELLS ──
  { id: 'hb-1', name: 'Wall-Hanging Bell', code: 'HB 1', material: 'Iron & Brass', size: '5", 6", 7"', finish: BELL_FINISHES, category: 'Bells', subcategory: 'Wall-Hanging Bells' },
  { id: 'hb-3', name: 'Polished Brass Wall-Hanging Bell', code: 'HB 3', material: 'Iron & Brass', size: '5", 6", 7"', finish: BELL_FINISHES, category: 'Bells', subcategory: 'Wall-Hanging Bells' },
  { id: 'hb-2', name: 'Brass Hand Bells with Wooden Handles', code: 'HB 2', material: 'Iron & Brass', size: '5", 6", 7"', finish: BELL_FINISHES, category: 'Bells', subcategory: 'Hand Bells' },
  { id: 'hb-4', name: 'Coloured Hand Bells Set', code: 'HB 4', material: 'Iron & Brass', size: '5", 6", 7"', finish: BELL_FINISHES, category: 'Bells', subcategory: 'Hand Bells' },
  // ── CASTORS ──
  { id: 'ca-1', name: 'Brass Castor with Round Cup', code: 'CA 1', material: 'Brass', size: 'Standard', finish: CASTOR_FINISHES, category: 'Castors', subcategory: 'Castors' },
  { id: 'ca-2', name: 'Brass Castor with Square Cup', code: 'CA 2', material: 'Brass', size: 'Standard', finish: CASTOR_FINISHES, category: 'Castors', subcategory: 'Castors' },
  { id: 'ca-3', name: 'Brass Claw & Ball Castor', code: 'CA 3', material: 'Brass', size: 'Standard', finish: CASTOR_FINISHES, category: 'Castors', subcategory: 'Castors' },
  { id: 'ca-4', name: 'Two-Tone Brass & Black Castor', code: 'CA 4', material: 'Brass', size: 'Standard', finish: CASTOR_FINISHES, category: 'Castors', subcategory: 'Castors' },
  // ── EASELS ──
  { id: 'es-1', name: 'Wire Easels (Set of 3 Sizes)', code: 'ES 1', material: 'Brass & Iron', size: 'Standard', finish: EASEL_FINISHES, category: 'Easels', subcategory: 'Easels' },
  { id: 'es-2', name: 'Ornate Decorative Easels (Set of 3 Sizes)', code: 'ES 2', material: 'Brass & Iron', size: 'Standard', finish: EASEL_FINISHES, category: 'Easels', subcategory: 'Easels' },
  { id: 'es-3', name: 'Small Decorative Metal Easels', code: 'ES 3', material: 'Brass & Iron', size: 'Standard', finish: EASEL_FINISHES, category: 'Easels', subcategory: 'Easels' },
  { id: 'es-4', name: 'Brass Finish Wire Easels (Set of 3 Sizes)', code: 'ES 4', material: 'Brass & Iron', size: 'Standard', finish: EASEL_FINISHES, category: 'Easels', subcategory: 'Easels' },
];

const mainCategories = [
  'All',
  'Cabinet Hardware',
  'Door Hardware',
  'Gate Hardware',
  'Window Hardware',
  'Switch Plates',
  'Shelf Brackets',
  'Hooks',
  'Bathroom Hardware',
  'Bells',
  'Castors',
  'Easels',
];

const categoryIcons: Record<string, string> = {
  'All': 'Squares2X2Icon',
  'Cabinet Hardware': 'ArchiveBoxIcon',
  'Door Hardware': 'HomeIcon',
  'Gate Hardware': 'LockClosedIcon',
  'Window Hardware': 'WindowIcon',
  'Switch Plates': 'BoltIcon',
  'Shelf Brackets': 'BookmarkIcon',
  'Hooks': 'LinkIcon',
  'Bathroom Hardware': 'BeakerIcon',
  'Bells': 'BellIcon',
  'Castors': 'CogIcon',
  'Easels': 'PhotoIcon',
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const subcategories = activeCategory === 'All'
    ? ['All']
    : ['All', ...Array.from(new Set(allProducts.filter(p => p.category === activeCategory).map(p => p.subcategory)))];

  const filtered = allProducts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSub = activeSubcategory === 'All' || p.subcategory === activeSubcategory;
    const matchSearch = searchQuery === '' ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSub && matchSearch;
  });

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveSubcategory('All');
  };

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative bg-primary pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">LBI 2026 Catalogue</span>
            <h1 className="font-display text-hero-xl font-semibold text-primary-foreground mb-4">
              Product Collections
            </h1>
            <p className="text-primary-foreground/60 text-sm max-w-xl leading-relaxed">
              370+ precision-crafted architectural and decorative hardware products in brass, iron, aluminium, zinc, ceramic, glass and more. Available in multiple finishes for global B2B supply.
            </p>
            <div className="mt-6 flex items-center gap-6 text-primary-foreground/50 text-xs">
              <span className="flex items-center gap-2">
                <Icon name="CheckBadgeIcon" size={14} variant="outline" className="text-accent" />
                ISO 9001:2015 Certified
              </span>
              <span className="flex items-center gap-2">
                <Icon name="GlobeAltIcon" size={14} variant="outline" className="text-accent" />
                Export to 30+ Countries
              </span>
              <span className="flex items-center gap-2">
                <Icon name="SwatchIcon" size={14} variant="outline" className="text-accent" />
                11+ Finish Options
              </span>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-secondary py-6 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-md">
            <Icon name="MagnifyingGlassIcon" size={16} variant="outline" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by product code, name or material…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-secondary py-5 px-6 sticky top-[72px] z-30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {mainCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-architectural uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-foreground hover:border-accent hover:text-accent'
                }`}
              >
                <Icon name={categoryIcons[cat] || 'Squares2X2Icon'} size={11} variant="outline" />
                {cat}
              </button>
            ))}
          </div>
          {/* Subcategory filter */}
          {subcategories.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border/50">
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={`px-3 py-1.5 text-xs transition-all duration-200 ${
                    activeSubcategory === sub
                      ? 'bg-accent text-primary font-semibold' :'text-muted-foreground hover:text-accent border border-border/50 hover:border-accent'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Results count */}
      <section className="bg-background px-6 pt-8 pb-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-muted-foreground text-xs">
            Showing <span className="text-accent font-semibold">{filtered.length}</span> of {allProducts.length} products
            {activeCategory !== 'All' && <span> in <span className="text-foreground font-medium">{activeCategory}</span></span>}
            {activeSubcategory !== 'All' && <span> › <span className="text-foreground font-medium">{activeSubcategory}</span></span>}
          </p>
          <Link href="/contact" className="text-xs text-accent font-semibold tracking-architectural uppercase flex items-center gap-1 hover:underline">
            Request Catalogue
            <Icon name="ArrowDownTrayIcon" size={12} variant="outline" />
          </Link>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-background py-8 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="MagnifyingGlassIcon" size={40} variant="outline" className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-sm">No products found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {filtered.map((product, i) => (
                <ScrollAnimation key={product.id} animationClass="reveal-up" delay={Math.min(i * 30, 300)}>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="group text-left w-full border border-border bg-card hover:border-accent transition-all duration-300 overflow-hidden"
                  >
                    {/* Code badge */}
                    <div className="bg-primary px-3 py-2 flex items-center justify-between">
                      <span className="text-accent text-xs font-bold tracking-wide font-mono">{product.code}</span>
                      <Icon name="ArrowRightIcon" size={10} variant="outline" className="text-primary-foreground/40 group-hover:text-accent transition-colors" />
                    </div>
                    {/* Product info */}
                    <div className="p-3">
                      <h3 className="text-foreground text-xs font-semibold leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="CubeIcon" size={10} variant="outline" className="text-accent flex-shrink-0" />
                          <span className="truncate">{product.material.split(',')[0].trim()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="ArrowsPointingOutIcon" size={10} variant="outline" className="text-accent flex-shrink-0" />
                          <span className="truncate">{product.size}</span>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-border/50">
                        <span className="text-xs text-muted-foreground/70 truncate block">{product.subcategory}</span>
                      </div>
                    </div>
                  </button>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-card w-full sm:max-w-2xl max-h-screen sm:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="bg-primary px-8 py-6 flex items-start justify-between">
              <div>
                <span className="text-accent text-xs font-bold tracking-architectural uppercase block mb-1 font-mono">{selectedProduct.code}</span>
                <h2 className="font-display text-2xl font-semibold text-primary-foreground">{selectedProduct.name}</h2>
                <p className="text-primary-foreground/50 text-xs mt-1">{selectedProduct.category} › {selectedProduct.subcategory}</p>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-9 h-9 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground transition-colors flex-shrink-0 ml-4"
                aria-label="Close"
              >
                <Icon name="XMarkIcon" size={18} variant="outline" />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Product Code', value: selectedProduct.code, icon: 'TagIcon' },
                  { label: 'Material', value: selectedProduct.material, icon: 'CubeIcon' },
                  { label: 'Size', value: selectedProduct.size, icon: 'ArrowsPointingOutIcon' },
                  { label: 'Category', value: selectedProduct.category, icon: 'Squares2X2Icon' },
                ].map((detail) => (
                  <div key={detail.label} className="border border-border p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={detail.icon as 'TagIcon'} size={12} variant="outline" className="text-accent" />
                      <span className="text-accent text-xs font-semibold tracking-architectural uppercase">{detail.label}</span>
                    </div>
                    <span className="text-foreground text-sm font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>

              {/* Finishes */}
              <div className="border border-border p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="SwatchIcon" size={12} variant="outline" className="text-accent" />
                  <span className="text-accent text-xs font-semibold tracking-architectural uppercase">Available Finishes</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedProduct.finish.split('·').map((f) => (
                    <span key={f.trim()} className="px-2 py-1 bg-secondary text-xs text-foreground border border-border">
                      {f.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-secondary border border-border p-4 mb-6 text-xs text-muted-foreground leading-relaxed">
                <Icon name="InformationCircleIcon" size={12} variant="outline" className="text-accent inline mr-1" />
                All products are available in standard sizes or customized to your specifications. Contact us for custom orders, OEM manufacturing, and bulk B2B pricing.
              </div>

              <Link
                href="/contact"
                onClick={() => setSelectedProduct(null)}
                className="btn-primary w-full justify-center"
              >
                Request B2B Quotation for {selectedProduct.code}
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}