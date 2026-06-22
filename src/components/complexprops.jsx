import React, { useState } from "react";

function UserProfileCard({ user, theme, actions }) {
  const isUrl =
    typeof user.avatar === "string" &&
    (user.avatar.startsWith("http") || user.avatar.startsWith("data:"));

  return (
    <div
      className={`p-6 rounded-xl shadow-lg ${theme.backgroundColor} ${theme.textColor}`}
    >
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl overflow-hidden ${theme.avatarBg}`}
        >
          {isUrl ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            user.avatar
          )}
        </div>

        <div>
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Status & Role */}
      <div className="mt-3 flex items-center gap-3">
        <span
          className={`text-xs px-2 py-1 rounded-full ${theme.badgeBg}`}
        >
          {user.status}
        </span>

        <span className="text-sm text-gray-600">{user.role}</span>
      </div>

      {/* Dynamic Stats */}
      <div className="mt-4 flex gap-6">
        {Object.entries(user.stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="font-bold text-lg">{value}</div>
            <div className="text-xs text-gray-500 capitalize">
              {key}
            </div>
          </div>
        ))}
      </div>

      {/* Commit Section */}
      {user.commit && (
        <div className="mt-4 p-3 rounded-lg bg-gray-100">
          <h3 className="font-semibold">Latest Commit</h3>

          <p className="text-sm mt-1">{user.commit.message}</p>

          <p className="text-xs text-gray-500 mt-1">
            {user.commit.repo} • {user.commit.date}
          </p>
        </div>
      )}

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={actions.primary.onClick}
          className={actions.primary.className}
        >
          {actions.primary.label}
        </button>

        <button
          onClick={actions.secondary.onClick}
          className={actions.secondary.className}
        >
          {actions.secondary.label}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [message, setMessage] = useState("");

  const users = [
    
    {
      user: {
        name: "HIMANSHU",
        email: "himanshu@gmail.com",
        avatar: "😎",
        role: "Intern",
        status: "inactive",

        stats: {
          posts: 123,
          followers: 234,
          following: 334,
        },
      },

      theme: {
        backgroundColor:
          "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () =>
            setMessage("Viewing Himanshu's Profile"),
          className:
            "px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600",
        },

        secondary: {
          label: "Message",
          onClick: () =>
            setMessage("Opening chat with Himanshu"),
          className:
            "px-3 py-1 rounded border border-gray-400",
        },
      },
    },

    {
      user: {
        name: "OM",
        email: "dddi@gmail.com",
        avatar: "😁",
        role: "Corporate",
        status: "Active",

        stats: {
          posts: 500,
          commits: 2134,
          pushes: 334,
        },

      },

      theme: {
        backgroundColor:
          "bg-gradient-to-br from-yellow-100 to-orange-100",
        textColor: "text-gray-800",
        avatarBg: "bg-yellow-300",
        badgeBg: "bg-yellow-200",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () =>
            setMessage("Viewing hhhh's Profile"),
          className:
            "px-3 py-1 rounded bg-orange-500 text-white hover:bg-orange-600",
        },

        secondary: {
          label: "Message",
          onClick: () =>
            setMessage("Opening chat with hhhhh"),
          className:
            "px-3 py-1 rounded border border-gray-400",
        },
      },
      
    },
    {
      user: {
        name: "Hk",
        email: "KH@gmail.com",
        avatar: "😉",
        role: "Corporate",
        status: "Active",

        stats: {
          posts: 100,
          follower: 34,
          like: 3343,
          commit : 222,
        },

      },

      theme: {
        backgroundColor:
          "bg-gradient-to-br from-yellow-100 to-orange-100",
        textColor: "text-gray-800",
        avatarBg: "bg-yellow-300",
        badgeBg: "bg-yellow-200",
      },

      actions: {
        primary: {
          label: "View Profile",
          onClick: () =>
            setMessage("Viewing Goldi's Profile"),
          className:
            "px-3 py-1 rounded bg-orange-500 text-white hover:bg-orange-600",
        },

        secondary: {
          label: "Message",
          onClick: () =>
            setMessage("Opening chat with Goldi"),
          className:
            "px-3 py-1 rounded border border-gray-400",
        },
      },
      
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        User Profile Cards
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {users.map((item, index) => (
          <UserProfileCard
            key={index}
            user={item.user}
            theme={item.theme}
            actions={item.actions}
          />
        ))}
      </div>

      {message && (
        <div className="mt-8 text-center text-green-600 font-semibold">
          {message}
        </div>
      )}
    </div>
  );
}