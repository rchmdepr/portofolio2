import { ExternalLink } from "lucide-react";

interface SertifCardProps {
  imageUrl: string;
  title: string;
  issuer: string;
  url: string;
}

const SertifCard = ({ imageUrl, title, issuer, url }: SertifCardProps) => {
  // Mengambil path src dari gambar, baik itu string atau objek StaticImageData
  const imgSrc = imageUrl;

  return (
    <div className="group relative flex-shrink-0 w-80 md:w-96 bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1">
      <div className="overflow-hidden h-48">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white truncate">{title}</h3>
        <p className="text-sm text-slate-400 mb-4">{issuer}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
          Lihat Kredensial
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default SertifCard;