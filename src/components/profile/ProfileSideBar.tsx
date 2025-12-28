import React from "react";

interface ProfileInfo {
  name: string;
  id: string;
  email: string;
  phone: string;
  company: string;
  location: string;
}

interface ProfileFieldProps {
  label: string;
  value: string;
}

const ProfileSideBar: React.FC = () => {
  // Profile data - could be moved to props or fetched from API
  const profileData: ProfileInfo = {
    name: "Habibulla",
    id: "1234567890",
    email: "habibulla@example.com",
    phone: "01707255555",
    company: "fffffffffff",
    location: "432, Washington Av",
  };

  return (
    <aside className="max-w-xs w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden ">
      {/* Profile Header */}
      <div className="relative">
        <div className="bg-gradient-to-r relative from-cyan-600 to-teal-500 md:h-32 rounded-t-2xl p-5 h-20">
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 bg-white rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">OR</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Summary */}
        <div className="pt-14 pb-6 px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
          <p className="text-gray-500 text-sm mt-1">ID: {profileData.id}</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="px-4 pb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 px-4">Profile Information</h3>
        <ul className="space-y-1 divide-y divide-gray-100">
          <ProfileField label="Name" value={profileData.name} />
          <ProfileField label="Email" value={profileData.email} />
          <ProfileField label="Phone" value={profileData.phone} />
          <ProfileField label="Company" value={profileData.company} />
          <ProfileField label="Location" value={profileData.location} />
        </ul>
      </div>
    </aside>
  );
};

// ProfileField component for consistent field rendering
const ProfileField: React.FC<ProfileFieldProps> = ({ label, value }) => (
  <li className="flex justify-start gap-4 items-center py-3 px-4 hover:bg-gray-50 transition-colors">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-800 text-right">{value}</span>
  </li>
);

export default ProfileSideBar;