import React, { useState } from "react";

function UserProfileCard({ user, theme, actions }) {
  const isUrl =
    typeof user.avatar === "string" &&
    (user.avatar.startsWith("http") || user.avatar.startsWith("data:"));

  return (
    <div className={`p-6 rounded-xl shadow ${theme.backgroundColor} ${theme.textColor}`}>
      <div className="flex items-center space-x-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${theme.avatarBg} overflow-hidden`}
        >
          {isUrl ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            user.avatar
          )}
        </div>

        <div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </div>

      <div className="mt-2 flex items-center space-x-3">
        {user.status && (
          <span className={`text-xs px-2 py-1 rounded ${theme.badgeBg}`}>
            {user.status}
          </span>
        )}

        {user.role && <span className="text-sm text-gray-600">{user.role}</span>}
      </div>

      <div className="mt-3 flex space-x-6 text-sm">
        {user.stats?.posts !== undefined && (
          <div className="text-center">
            <div className="font-semibold">{user.stats.posts}</div>
            <div className="text-xs text-gray-500">Posts</div>
          </div>
        )}

        {user.stats?.follower !== undefined && (
          <div className="text-center">
            <div className="font-semibold">{user.stats.follower}</div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
        )}

        {user.stats?.following !== undefined && (
          <div className="text-center">
            <div className="font-semibold">{user.stats.following}</div>
            <div className="text-xs text-gray-500">Following</div>
          </div>
        )}

        {user.stats?.commit !== undefined && (
          <div className="text-center">
            <div className="font-semibold">{user.stats.commit}</div>
            <div className="text-xs text-gray-500">Commit</div>
          </div>
        )}

        {user.stats?.push !== undefined && (
          <div className="text-center">
            <div className="font-semibold">{user.stats.push}</div>
            <div className="text-xs text-gray-500">Push</div>
          </div>
        )}
      </div>

      {user.commit && (
        <div className="mt-4 p-3 rounded bg-gray-100 text-gray-800">
          <div className="font-semibold">Latest Commit</div>
          <p className="text-sm">{user.commit.message}</p>
          <p className="text-xs text-gray-500">
            {user.commit.repo} • {user.commit.date}
          </p>
        </div>
      )}

      <div className="mt-4 flex space-x-3">
        <button onClick={actions.primary.onClick} className={actions.primary.className}>
          {actions.primary.label}
        </button>

        <button onClick={actions.secondary.onClick} className={actions.secondary.className}>
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
        email: "ww.com",
        avatar: "😒",
        role: "intern",
        status: "Active",
        stats: {
          posts: 123,
          follower: 234,
          following: 334,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("View Himanshu's profile"),
          className: "px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Himanshu"),
          className: "px-3 py-1 rounded border text-gray-800 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "GOLDI",
        email: "HK@.com",
        avatar: "😁",
        role: "corporate",
        status: "Active",
        stats: {
          posts: 500,
          commit: 234,
          push: 334,
        },
        commit: {
          message: "Added profile card and pushed latest React changes",
          date: "2026-06-22",
          repo: "react-profile-card",
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("View Goldi's profile"),
          className: "px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Goldi"),
          className: "px-3 py-1 rounded border",
        },
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid gap-6 md:grid-cols-2">
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
        <p className="mt-6 text-center font-semibold text-green-600">
          {message}
        </p>
      )}
    </div>
  );
}