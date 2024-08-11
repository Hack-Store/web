import React from "react";

export default function Logo({
  width = 64,
  height = 64,
}: {
  width: number;
  height: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4062 11.0205H22.1111V23.8361H28.398V11.0205H37.103V23.8361H42.3535L39.4476 28.2491H34.7176C33.9326 28.2491 33.2525 28.601 32.7999 29.2435C32.37 29.8536 32.2404 30.5696 32.4265 31.2911L32.4282 31.2981L35.3358 42.058L35.341 42.0754C35.5634 42.8127 35.9792 43.4407 36.5807 43.9229C36.7471 44.0562 36.9215 44.1724 37.103 44.2707V56.4795C37.103 56.4795 36.1201 55.1129 35.4104 54.3032C34.618 53.3995 34.1295 52.9287 33.2341 52.1271C32.3331 51.3204 31.8111 50.8799 30.8161 50.1926C29.91 49.5667 28.398 48.7419 28.398 48.7419V31.5737H22.1111V47.291H13.4062V11.0205Z"
        fill="white"
      />
      <path
        d="M46.0936 38.7839C46.7194 38.7839 47.255 38.5566 47.7005 38.1021C48.1461 37.6475 48.3689 37.101 48.3689 36.4627C48.3689 35.8244 48.1461 35.278 47.7005 34.8234C47.255 34.3689 46.7194 34.1415 46.0936 34.1415C45.4679 34.1415 44.9322 34.3689 44.4867 34.8234C44.0411 35.278 43.8184 35.8244 43.8184 36.4627C43.8184 37.101 44.0411 37.6475 44.4867 38.1021C44.9322 38.5566 45.4679 38.7839 46.0936 38.7839Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.7276 43.4263C38.2158 43.4263 37.7608 43.2667 37.3625 42.9475C36.9644 42.6284 36.6895 42.2174 36.5378 41.7144L33.6369 30.9789C33.542 30.6114 33.6036 30.2729 33.8218 29.9634C34.0398 29.6539 34.3384 29.4991 34.7176 29.4991H40.1213L45.1268 21.8972C45.2216 21.7425 45.3543 21.6167 45.525 21.5201C45.6956 21.4234 45.8758 21.375 46.0653 21.375C46.2549 21.375 46.435 21.4234 46.6056 21.5201C46.7764 21.6167 46.909 21.7425 47.0039 21.8972L52.0094 29.4991H57.4699C57.8491 29.4991 58.1478 29.6539 58.3658 29.9634C58.5839 30.2729 58.6455 30.6114 58.5506 30.9789L55.6498 41.7144C55.498 42.2174 55.2231 42.6284 54.825 42.9475C54.4268 43.2667 53.9718 43.4263 53.4599 43.4263H38.7276ZM53.4883 41.1051H38.6993L36.1965 31.8204H55.991L53.4883 41.1051ZM49.2791 29.4991H42.88L46.0653 24.6246L49.2791 29.4991Z"
        fill="white"
      />
    </svg>
  );
}