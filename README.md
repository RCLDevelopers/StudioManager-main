# Studio Manager by Zangtics Digital

A comprehensive studio management solution designed for modern production environments. Our platform streamlines operations for TV, radio, photo, and video studios while providing powerful tools for resource management and client engagement.

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/RCLDevelopers/Studio-Manager-by-ZD)

## Core Features

### 1. Studio Management
- Studio listing and availability tracking
- Capacity and resource management
- Real-time status monitoring (active/maintenance/inactive)
- Location and facility details
- Hourly rate management

### 2. Equipment Management
- Comprehensive equipment inventory
- Status tracking (available/in-use/maintenance)
- Equipment categorization and type management
- Detailed equipment descriptions and specifications
- Studio-specific equipment assignment

### 3. Booking System
- Real-time studio availability checking
- Advanced booking management
- Multiple booking statuses (pending/confirmed/cancelled/completed)
- Detailed booking notes and requirements
- Automated time slot management

### 4. Payment Processing
- Multiple payment methods support (cash/credit card/bank transfer)
- Payment status tracking
- Transaction history
- Automated payment processing
- Refund management

### 5. User Management
- Role-based access control (admin/manager/staff)
- User profile management
- Contact information management
- Authentication and authorization
- Session management

## Technical Stack

### Backend
- Laravel 12.x
- PHP 8.2+
- MySQL/PostgreSQL
- RESTful API architecture

### Frontend
- React.js with TypeScript
- Material-UI components
- Redux for state management
- Responsive design

## Getting Started

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js >= 16.x
- MySQL or PostgreSQL
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/RCLDevelopers/Studio-Manager-by-ZD.git
cd Studio-Manager-by-ZD
```

2. Install PHP dependencies
```bash
composer install
```

3. Install JavaScript dependencies
```bash
npm install
```

4. Configure environment
```bash
cp .env.example .env
php artisan key:generate
```

5. Set up the database
```bash
php artisan migrate
```

6. Start the development server
```bash
php artisan serve
npm run dev
```

## API Documentation

The API documentation is available at `/api/documentation` after starting the server.

## Database Schema

### Users
- Authentication and user management
- Role-based permissions
- Profile information

### Studios
- Studio information and availability
- Resource management
- Pricing and capacity

### Equipment
- Inventory management
- Status tracking
- Studio assignment

### Bookings
- Reservation management
- Schedule tracking
- Client requirements

### Payments
- Transaction processing
- Payment status tracking
- Financial records

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Security

If you discover any security-related issues, please email security@zangticsdigital.com instead of using the issue tracker.

## Credits

Designed and Developed by [Zangtics Digital](https://zangticsdigital.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Support

For support, please email support@zangticsdigital.com or visit our [support portal](https://support.zangticsdigital.com).
