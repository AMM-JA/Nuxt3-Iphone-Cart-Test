export const useCart = () => useState(() => []);
export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));

export const usePageVisitCount = () => useState(() => 0);
export const useUrl = () => useState(() => 'https://api.marketplace.com.mm/api');
