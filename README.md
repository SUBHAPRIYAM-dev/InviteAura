# 🎉 InviteAura - AI-Powered Event Invitation Website Builder

A premium, full-stack SaaS platform for creating beautiful digital invitations for weddings, birthdays, anniversaries, and other celebrations.

## 🌟 Features

### ✨ Core Features
- **AI-Powered Templates**: Beautiful, customizable invitation templates
- **Multiple Event Types**: Wedding, Birthday, Anniversary, Engagement, Baby Shower, Reception, Corporate, and more
- **Live Preview**: Real-time preview of invitation changes
- **Dynamic Form System**: Context-aware forms based on event type
- **Theme Engine**: Fully customizable color schemes, fonts, and animations
- **RSVP Management**: Track guest responses with analytics
- **QR Code Generator**: Generate QR codes for quick RSVP entry
- **Multi-Language Support**: Support for multiple languages
- **Dark/Light Mode**: Theme switching capability

### 💳 Premium Features
- Unlimited premium templates
- Custom domain support
- No watermark invitations
- Advanced analytics
- Video upload capability
- Priority customer support
- White-label customization

### 🔐 Security Features
- JWT authentication
- Google OAuth integration
- Password encryption (bcryptjs)
- Rate limiting
- XSS protection
- MongoDB injection prevention
- Secure payment processing

### 📊 Analytics & Management
- Guest RSVP tracking
- Attendance analytics
- Payment history
- Subscription management
- Admin dashboard

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios
- **Authentication**: JWT + Google OAuth

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT, bcryptjs
- **Payment Gateway**: Razorpay, Stripe
- **File Upload**: Cloudinary
- **Email**: Nodemailer
- **Security**: Helmet, Rate Limiter, Mongo Sanitize

### DevOps & Deployment
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Render/Railway
- **Database**: MongoDB Atlas
- **File Storage**: Cloudinary
- **Environment Management**: dotenv

## 📁 Project Structure

```
InviteAura/
├── server/                          # Backend (Node.js + Express)
│   ├── models/                      # Mongoose schemas
│   ├── controllers/                 # Business logic
│   ├── routes/                      # API endpoints
│   ├── middleware/                  # Custom middleware
│   ├── services/                    # External integrations
│   ├── config/                      # Configuration files
│   ├── server.js                    # Entry point
│   └── package.json
│
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   ├── pages/                   # Page components
│   │   ├── redux/                   # Redux store & slices
│   │   ├── services/                # API services
│   │   ├── hooks/                   # Custom hooks
│   │   ├── routes/                  # Route definitions
│   │   ├── styles/                  # Global styles
│   │   ├── App.jsx                  # Main app component
│   │   └── main.jsx                 # Entry point
│   ├── public/                      # Static assets
│   ├── index.html                   # HTML template
│   ├── vite.config.js              # Vite config
│   ├── tailwind.config.js          # Tailwind config
│   └── package.json
│
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16
- npm or yarn
- MongoDB Atlas account
- Cloudinary account
- Razorpay/Stripe account (for payments)

### Backend Setup

1. **Navigate to server directory**
```bash
cd server
npm install
```

2. **Create .env file**
```bash
cp .env.example .env
```

3. **Fill in environment variables** (see .env.example)

4. **Start the server**
```bash
npm run dev
```

### Frontend Setup

1. **Navigate to client directory**
```bash
cd client
npm install
```

2. **Create .env file**
```bash
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

3. **Start development server**
```bash
npm run dev
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/me` - Get current user

### Invitation Endpoints
- `POST /api/invitations` - Create invitation
- `GET /api/invitations` - Get user invitations
- `GET /api/invitations/:id` - Get invitation details
- `PUT /api/invitations/:id` - Update invitation
- `DELETE /api/invitations/:id` - Delete invitation
- `POST /api/invitations/:id/publish` - Publish invitation
- `GET /api/invitations/public/:slug` - Get public invitation

### RSVP Endpoints
- `POST /api/rsvp` - Submit RSVP
- `GET /api/rsvp/:invitationId` - Get RSVP list
- `GET /api/rsvp/:invitationId/analytics` - Get RSVP analytics

### Payment Endpoints
- `POST /api/payments/razorpay` - Create Razorpay order
- `POST /api/payments/razorpay/verify` - Verify payment
- `GET /api/payments/history` - Get payment history

## 🎨 Design System

**Color Scheme:**
- Cream: #FFF5E4
- Deep Red: #8B0000
- Wine Red: #A52A2A
- Gold: #D4AF37
- White: #FFFFFF
- Dark Text: #2B2B2B

**Typography:**
- Headings: Playfair Display
- Body: Lato
- UI: Montserrat

## 🚀 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Backend (Render/Railway)
1. Push to GitHub
2. Connect repository
3. Set environment variables
4. Deploy

## 📝 Event Types
- Wedding
- Birthday
- Anniversary
- Engagement
- Baby Shower
- Reception
- Corporate Event
- Farewell
- Housewarming
- Festival
- Custom Event

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Support

Email: support@inviteaura.com

---

**Made with ✨ for beautiful celebrations**
