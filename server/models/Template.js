import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide template name'],
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
        'wedding',
        'birthday',
        'anniversary',
        'engagement',
        'baby_shower',
        'corporate',
        'custom',
      ],
      required: true,
    },
    previewImage: {
      type: String,
      required: true,
    },
    previewImages: [String],
    htmlTemplate: {
      type: String,
      required: true,
    },
    cssTemplate: {
      type: String,
      default: '',
    },
    defaultColors: {
      primary: {
        type: String,
        default: '#8B0000',
      },
      secondary: {
        type: String,
        default: '#FFF5E4',
      },
      accent: {
        type: String,
        default: '#D4AF37',
      },
    },
    fonts: {
      heading: {
        type: String,
        default: 'Playfair Display',
      },
      body: {
        type: String,
        default: 'Lato',
      },
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
    reviews: [
      {
        userId: mongoose.Schema.Types.ObjectId,
        rating: Number,
        comment: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    tags: [String],
    sections: [
      {
        name: String,
        editable: Boolean,
        customizable: Boolean,
      },
    ],
  },
  {
    timestamps: true,
  }
);

templateSchema.index({ category: 1, isPremium: 1 });
templateSchema.index({ name: 'text', description: 'text' });

export default mongoose.model('Template', templateSchema);
