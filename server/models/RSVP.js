import mongoose from 'mongoose';

const rsvpSchema = new mongoose.Schema(
  {
    invitationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invitation',
      required: true,
    },
    guestName: {
      type: String,
      required: [true, 'Please provide guest name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      lowercase: true,
    },
    phone: {
      type: String,
      default: '',
    },
    attending: {
      type: Boolean,
      required: true,
    },
    attendeeCount: {
      type: Number,
      default: 1,
      min: 1,
      max: 10,
    },
    dietaryPreference: {
      type: String,
      enum: ['vegetarian', 'non-vegetarian', 'vegan', 'gluten-free', 'none'],
      default: 'none',
    },
    specialRequests: {
      type: String,
      default: '',
      maxlength: 500,
    },
    wishes: {
      type: String,
      default: '',
      maxlength: 1000,
    },
    rsvpDate: {
      type: Date,
      default: Date.now,
    },
    source: {
      type: String,
      enum: ['website', 'qr_code', 'whatsapp', 'email', 'direct'],
      default: 'website',
    },
    metadata: {
      userAgent: String,
      ipAddress: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
rsvpSchema.index({ invitationId: 1 });
rsvpSchema.index({ email: 1 });
rsvpSchema.index({ attending: 1 });

export default mongoose.model('RSVP', rsvpSchema);
