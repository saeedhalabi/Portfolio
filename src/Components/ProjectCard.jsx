const ProjectCard = ({ title, subtitle, description, tags, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 p-6 bg-white shadow-lg rounded-lg w-full mt-10 max-w-2xl">
      {/* Image */}
      <div className="w-full md:w-40 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full rounded-md object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-bold leading-tight">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-200 text-xs px-3 py-1 rounded-full uppercase font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-semibold text-sm mt-3 inline-block border-b-2 border-black uppercase tracking-wide"
        >
          See Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
