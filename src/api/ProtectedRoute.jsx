function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const valid = await checkToken({
        gymId: firstGym.GymId,
        token: tokenIs,
        mobile: selectedGym.mob,
      });

      setAllowed(valid);
      setLoading(false);
    };

    verify();
  }, []);

  if (loading) return <Loading />;

  if (!allowed) {
    return <Navigate to="/login" replace />;
  }

  return children;
}