import React, { useState } from 'react';
import Header from './Header';
import RightSidebar from './RightSidebar';
import DashboardContent from './DashboardContent';
import Sidebar from './Sidebar';

const AppExample = () => {
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setIsRightSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsRightSidebarOpen(false);
    };

    return (
        <div className="d-flex">
            {/* Left Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-grow-1 d-flex flex-column">
                {/* Header with Menu Button */}
                <Header onMenuClick={handleMenuClick} />

                {/* Dashboard Content */}
                <main className="flex-grow-1">
                    <DashboardContent
                        onTrendingButtonClick={() => console.log('Trending clicked')}
                        onPopularViewAllClick={() => console.log('Popular view all clicked')}
                        onBookClick={(book) => console.log('Book clicked:', book)}
                        onAuthorsViewAllClick={() => console.log('Authors view all clicked')}
                        onAuthorClick={(author) => console.log('Author clicked:', author)}
                    />
                </main>
            </div>

            {/* Right Sidebar - Toggleable */}
            <RightSidebar
                isOpen={isRightSidebarOpen}
                onClose={handleCloseSidebar}
            />
        </div>
    );
};

export default AppExample;
