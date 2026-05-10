import mongoose from 'mongoose';

const themeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide theme name'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      enum: [
        'royal_wedding',
        'floral_wedding',
        'traditional',
        'minimal_modern',
        'kids_birthday',
        'luxury_anniversary',
        'corporate',
        'custom',
      ],
      required: true,
    },
    previewImage: {
      type: String,
      required: true,
    },
    colors: {
      primary: {
        type: String,
        required: true,
      },
      secondary: {
        type: String,
        required: true,
      },
      accent: {
        type: String,
        required: true,
      },
      background: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        default: '#2B2B2B',
      },
    },
    fonts: {
      heading: {
        name: String,
        weight: String,
      },
      body: {
        name: String,
        weight: String,
      },
      accent: {
        name: String,
        weight: String,
      },
    },
    animations: {
      type: String,
      enum: ['none', 'subtle', 'moderate', 'dynamic'],
      default: 'subtle',
    },
    layout: {
      type: String,
      enum: ['modern', 'traditional', 'minimalist', 'luxury'],
      default: 'modern',
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    premiumPrice: {
      type: Number,
      default: 0,
    },
    usageCount: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    customizableElements: [
      {
        element: String,
        customizable: Boolean,
      },
    ],
    cssVariables: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
  }
);

themeSchema.index({ category: 1, isPremium: 1 });

export default mongoose.model('Theme', themeSchema);
