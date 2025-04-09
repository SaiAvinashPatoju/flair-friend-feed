
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import GroupsPage from "@/pages/GroupsPage";
import CreatePostPage from "@/pages/CreatePostPage";
import ChatsPage from "@/pages/ChatsPage";
import ChatView from "@/pages/ChatView";
import ProfilePage from "@/pages/ProfilePage";
import SearchPage from "@/pages/SearchPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/chats/:chatId" element={<ChatView />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
