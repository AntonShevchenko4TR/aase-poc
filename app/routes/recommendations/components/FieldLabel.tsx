interface FieldLabelProps {
  title?: string;
  description?: string;
}

export const FieldLabel = ({ title, description }: FieldLabelProps) => (
  <div>
    <span className="text-gray-800 text-md font-bold">{title}:</span>
    <span className="text-gray-400 text-md pl-1 pr-8">{description}</span>
  </div>
);
