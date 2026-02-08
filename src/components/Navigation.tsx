import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Volume2, X, Search, Loader2, Pause, Minus, ChevronDown, SkipForward } from "lucide-react";

// API Key untuk YouTube Data API (Diambil dari referensi project Anda)
const API_KEY = "AIzaSyBfeailKaZY7Ghp3DYdbckRf3K2YqxUaU0"; // <-- TEMPEL KODE API KEY BARU ANDA DI SINI (Hapus teks ini dan paste kodenya)

// ID Video Default (Ed Sheeran - Photograph)
const DEFAULT_VIDEO_ID = "nSDgHBxUbVQ"; 

// Daftar lagu untuk Auto-play setelah lagu yang dicari selesai
const RECOMMENDED_PLAYLIST = [
  "jfKfPfyJRdk", // Lofi Girl
  "5qap5aO4i9A", // Lofi Hip Hop
  "DWcJFNfaw9c", // Lofi Sleep
  "7NOSDKb0HlU", // Chill Drive
  "lTRiuFIWV54", // Slow Dancing in the Dark
];

// Komponen UI Player (Dipindah ke luar agar tidak re-render saat ketik)
const MusicPlayerUI = ({ 
  searchQuery, 
  setSearchQuery, 
  handleSearch, 
  isSearching, 
  isPlaying, 
  currentVideoTitle, 
  toggleMusic, 
  searchResults, 
  playSelectedVideo,
  onClose,
  onSkip
}: {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  isSearching: boolean;
  isPlaying: boolean;
  currentVideoTitle: string;
  toggleMusic: () => void;
  searchResults: any[];
  playSelectedVideo: (id: string, title: string) => void;
  onClose: () => void;
  onSkip: () => void;
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Header & Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Music Player</span>
          {isPlaying && <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>}
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 hover:text-white"
            title={isMinimized ? "Expand" : "Minimize"}
          >
            {isMinimized ? <ChevronDown size={16} /> : <Minus size={16} />}
          </button>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 hover:text-white"
            title="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Search Bar - Hidden when minimized */}
      {!isMinimized && (
        <form onSubmit={handleSearch} className="relative w-full">
          <input 
            type="text" 
            placeholder="Cari lagu..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-2 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-white transition-colors"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white">
            {isSearching ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
          </button>
        </form>
      )}

      {/* Controls & Status */}
      <div className="flex items-center justify-between bg-zinc-900/50 p-3 rounded-xl border border-zinc-800">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isPlaying ? "bg-white text-black" : "bg-zinc-800 text-zinc-500"}`}>
            {isPlaying ? <Volume2 size={18} className="animate-pulse" /> : <Music size={18} />}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Now Playing</span>
            <span className="text-sm font-medium text-white truncate w-32 md:w-48">
              {isPlaying ? currentVideoTitle : "Cari musik..."}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {isPlaying && (
            <>
              <button 
                onClick={onSkip}
                className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-white"
                title="Next Random Song"
              >
                <SkipForward size={20} />
              </button>
              <button 
                onClick={toggleMusic}
                className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-white"
                title="Stop Music"
              >
                <Pause size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Search Results - Hidden when minimized */}
      {!isMinimized && searchResults.length > 0 && (
        <div className="flex flex-col gap-2 mt-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
          <span className="text-xs text-zinc-500 px-1">Search Results</span>
          {searchResults.map((item) => (
            <button
              key={item.id.videoId}
              onClick={() => playSelectedVideo(item.id.videoId, item.snippet.title)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors text-left group w-full"
            >
              <img 
                src={item.snippet.thumbnails.default.url} 
                alt={item.snippet.title} 
                className="w-10 h-10 rounded object-cover opacity-70 group-hover:opacity-100"
              />
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm text-zinc-300 group-hover:text-white truncate line-clamp-1">{item.snippet.title}</span>
                <span className="text-xs text-zinc-500">{item.snippet.channelTitle}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Deklarasi global untuk YouTube IFrame API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const Navigation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(DEFAULT_VIDEO_ID);
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>("Photograph - Ed Sheeran");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false); // State untuk dropdown player di desktop
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // Ref untuk Player YouTube
  const playerRef = useRef<any>(null);
  const isLoopingRef = useRef(true); // Default loop untuk lagu pertama

  // Inisialisasi YouTube API
  useEffect(() => {
    // Load YouTube IFrame API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Fungsi callback ketika API siap
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: DEFAULT_VIDEO_ID,
        playerVars: {
          'autoplay': 1,
          'controls': 0,
          'loop': 1, // Loop default song
          'playlist': DEFAULT_VIDEO_ID // Diperlukan agar loop berfungsi di iframe API
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    return () => {
      // Cleanup jika diperlukan
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const onPlayerReady = (event: any) => {
    // Set volume ke 100%
    event.target.setVolume(100);
    setIsPlaying(true);
    // Coba putar video (mungkin diblokir browser jika belum ada interaksi)
    event.target.playVideo();

    // Workaround untuk Autoplay Policy browser modern:
    // Browser sering memblokir suara otomatis sebelum user berinteraksi dengan halaman.
    // Kode ini akan memastikan musik menyala/unmute saat user pertama kali klik/scroll/ketik.
    const enableAudio = () => {
      if (playerRef.current) {
        playerRef.current.unMute();
        playerRef.current.playVideo();
      }
      // Hapus listener agar tidak dijalankan berulang kali
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('keydown', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
    };

    window.addEventListener('click', enableAudio);
    window.addEventListener('keydown', enableAudio);
    window.addEventListener('touchstart', enableAudio);
  };

  const onPlayerStateChange = (event: any) => {
    // YT.PlayerState.ENDED === 0
    if (event.data === 0) {
      if (isLoopingRef.current) {
        // Jika mode looping (lagu default), biarkan (karena parameter loop:1 di playerVars menanganinya)
        // Atau paksa play lagi jika perlu
        playerRef.current.playVideo();
      } else {
        // Jika bukan mode looping (lagu hasil search), putar lagu random lain
        playRandomNextSong();
      }
    }
  };

  const playRandomNextSong = () => {
    const randomId = RECOMMENDED_PLAYLIST[Math.floor(Math.random() * RECOMMENDED_PLAYLIST.length)];
    playSelectedVideo(randomId, "Auto-play Recommendation");
  };

  // Update player saat currentVideoId berubah (jika player sudah siap)
  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById && currentVideoId) {
      // Jika ini lagu default, set loop true. Jika bukan, set loop false.
      const isDefault = currentVideoId === DEFAULT_VIDEO_ID;
      isLoopingRef.current = isDefault;

      playerRef.current.loadVideoById({
        videoId: currentVideoId,
      });
      
      // Jika default, kita set loop via playlist parameter di loadVideoById agak tricky, 
      // jadi kita handle manual di onStateChange untuk re-play jika isLoopingRef true.
    }
  }, [currentVideoId]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMainButtonClick = () => {
    if (window.innerWidth < 768) {
      toggleMenu();
    } else {
      setIsPlayerOpen(!isPlayerOpen);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentVideoId(null);
      setCurrentVideoTitle("");
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`);
      const data = await response.json();

      // Cek jika ada error dari API (misal: kuota habis atau key salah)
      if (data.error) {
        console.error("YouTube API Error:", data.error);
        // Fallback: Tawarkan pencarian manual jika API bermasalah
        if (confirm(`Gagal mencari via API: ${data.error.message}.\n\nKemungkinan API Key salah (harus berawalan 'AIza') atau belum mengaktifkan YouTube Data API v3.\n\nIngin mencari "${searchQuery}" langsung di YouTube?`)) {
           window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
        }
        return;
      }

      if (data.items) {
        setSearchResults(data.items);
      }
    } catch (error) {
      console.error("Search error", error);
    } finally {
      setIsSearching(false);
    }
  };

  const playSelectedVideo = (videoId: string, title: string) => {
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(title);
    isLoopingRef.current = false; // Matikan loop default saat user memilih lagu baru
    setIsPlaying(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <button 
              onClick={handleMainButtonClick}
              className={`
                relative z-50 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 shadow-xl
                ${isMenuOpen || isPlayerOpen
                  ? "bg-white border-white text-black rotate-90" 
                  : isPlaying 
                    ? "bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
                    : "bg-black border-zinc-800 text-white hover:bg-zinc-900 hover:border-white"
                }
              `}
              title="Menu & Music"
            >
              {isMenuOpen || isPlayerOpen ? (
                <X size={24} />
              ) : isPlaying ? (
                <Volume2 size={20} className="animate-pulse" />
              ) : (
                <div className="relative flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold italic pr-1">R</span>
                  
                </div>
              )}
            </button>

            {/* Desktop Player Dropdown */}
            <div className={`
              absolute top-full left-0 mt-4 w-80 bg-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl p-4
              transition-all duration-300 origin-top-left z-40 hidden md:block
              ${isPlayerOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
            `}>
               <MusicPlayerUI 
                 searchQuery={searchQuery}
                 setSearchQuery={setSearchQuery}
                 handleSearch={handleSearch}
                 isSearching={isSearching}
                 isPlaying={isPlaying}
                 currentVideoTitle={currentVideoTitle}
                 toggleMusic={toggleMusic}
                 searchResults={searchResults}
                 playSelectedVideo={playSelectedVideo}
                 onClose={() => setIsPlayerOpen(false)}
                 onSkip={playRandomNextSong}
               />
            </div>
          </div>

          {/* Hidden YouTube Player Container */}
          <div id="youtube-player" className="hidden"></div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Organisational
            </button>
            <button
              onClick={() => scrollToSection('download-cv')}
              className="text-foreground hover:text-primary transition-colors"
            >
                CV
            </button>
            <button
            onClick={() => scrollToSection('activities')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Activity
            </button>
            <button
            onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Me
            </button>
          </div>

          <Button variant="default" size="sm" onClick={() => scrollToSection('download-cv')}>
            Resume
          </Button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className={`
        absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 shadow-2xl 
        transition-all duration-500 ease-in-out overflow-hidden flex flex-col md:hidden
        ${isMenuOpen ? "max-h-[80vh] opacity-100 py-8" : "max-h-0 opacity-0 py-0"}
      `}>
         <div className="container mx-auto px-6 flex flex-col gap-6">
            {/* Music Control */}
            <div className="w-full max-w-md mx-auto mb-4 bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800">
                <MusicPlayerUI 
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  handleSearch={handleSearch}
                  isSearching={isSearching}
                  isPlaying={isPlaying}
                  currentVideoTitle={currentVideoTitle}
                  toggleMusic={toggleMusic}
                  searchResults={searchResults}
                  playSelectedVideo={playSelectedVideo}
                  onClose={() => setIsMenuOpen(false)}
                  onSkip={playRandomNextSong}
                />
            </div>

            {/* Menu Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                {['about', 'experience', 'skills', 'projects', 'download-cv', 'activities', 'contact'].map((section) => (
                    <button
                        key={section}
                        onClick={() => { scrollToSection(section); setIsMenuOpen(false); }}
                        className="text-zinc-400 hover:text-white text-lg py-3 border-b border-zinc-800/50 hover:border-zinc-500 transition-all uppercase tracking-wider"
                    >
                        {section.replace('-', ' ')}
                    </button>
                ))}
            </div>
         </div>
      </div>
    </nav>
  );
};

export default Navigation;