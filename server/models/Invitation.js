import mongoose from 'mongoose';

const invitationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    eventType: {
      type: String,
      enum: [
        'wedding',
        'birthday',
        'anniversary',
        'engagement',
        'baby_shower',
        'reception',
        'corporate',
        'farewell',
        'housewarming',
        'festival',
        'custom',
      ],
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      sparse: true,
    },
    description: {
      type: String,
      default: '',
    },
    eventDate: {
      type: Date,
      required: true,
    },
    venue: {
      type: String,
      default: '',
    },
    googleMapsLink: {
      type: String,
      default: '',
    },
    themeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Theme',
      default: null,
    },
    templateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Template',
      default: null,
    },
    eventData: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    customization: {
      primaryColor: {
        type: String,
        default: '#8B0000',
      },
      secondaryColor: {
        type: String,
        default: '#FFF5E4',
      },
      accentColor: {
        type: String,
        default: '#D4AF37',
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
      animation: {
        type: String,
        enum: ['none', 'subtle', 'moderate', 'dynamic'],
        default: 'subtle',
      },
    },
    media: {
      banner: String,
      gallery: [String],
      music: String,
      video: String,
    },
    rsvpSettings: {
      enabled: {
        type: Boolean,
        default: true,
      },
      closingDate: Date,
      allowGuestCount: {
        type: Boolean,
        default: true,
      },
      dietaryPreference: {
        type: Boolean,
        default: true,
      },
    },
    guestInfo: {
      totalExpected: {
        type: Number,
        default: 0,
      },
      rsvpAccepted: {
        type: Number,
        default: 0,
      },
      rsvpDeclined: {
        type: Number,
        default: 0,
      },
      rsvpPending: {
        type: Number,
        default: 0,
      },
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
      default: null,
    },
    expiresAt: {
      type: Date,
      default: null,
    },
    isDraft: {
      type: Boolean,
      default: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    shareCount: {
      type: Number,
      default: 0,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    customDomain: {
      type: String,
      default: null,
    },
    seoMetadata: {
      title: String,
      description: String,
      keywords: [String],
      ogImage: String,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
invitationSchema.index({ userId: 1, createdAt: -1 });
invitationSchema.index({ slug: 1 });
invitationSchema.index({ isPublished: 1 });

export default mongoose.model('Invitation', invitationSchema);
