import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        {statusCode
          ? `エラー ${statusCode}`
          : 'クライアント側でエラーが発生しました'}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {statusCode
          ? `サーバー側でエラーが発生しました`
          : '予期しないエラーが発生しました'}
      </p>
      <a
        href="/"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        ホームに戻る
      </a>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 