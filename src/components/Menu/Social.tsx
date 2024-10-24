function Social() {
  return (
    <div className="absolute top-[86vh]">
      <div className="flex flex-col gap-2">
        <a className="w-6" href="https://www.instagram.com/cosmin_ph/">
          <img src="/instaLogo.svg" alt="Instagram page link" />
        </a>
        <a href="https://www.instagram.com/cosmin_ph/">
          <img
            className="w-6"
            src="/whatsappLogo.svg"
            alt="Whatsapp contact link"
          />
        </a>
      </div>
    </div>
  );
}

export default Social;
