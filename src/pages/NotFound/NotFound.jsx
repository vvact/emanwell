import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy px-6">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-brand-gold tracking-widest">
          404
        </h1>

        {/* Message */}
        <p className="text-2xl md:text-3xl font-semibold text-white mt-6">
          Oops! Page not found
        </p>
        <p className="text-gray-300 mt-2 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-500 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
