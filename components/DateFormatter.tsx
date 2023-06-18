import { format, parseISO } from 'date-fns';
import { BiTimeFive } from 'react-icons/bi';

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);

  return (
    <time>
      <BiTimeFive
        size={18}
        style={{
          opacity: 0.5,
          marginRight: '5px',
        }}
      />
      {format(date, 'MMMM dd, yyyy')}
    </time>
  );
}
