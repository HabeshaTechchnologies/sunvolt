"use client";
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useTranslations } from "next-intl";

type Props = {};

const ContactUsForm = (props: Props) => {
  const t = useTranslations("ContactForm");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/send-email", {
        name: form.name,
        email: form.email,
        message: `${form.message}\n\nPhone: ${form.phone}`,
      });

      if (res.status === 200) {
        toast.success(t('success'));
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(t('error'));
      }
    } catch (err) {
      console.error(err);
      toast.error(t('error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="rts-contact-wrapper-form-area rts-section-gapBottom">
        <div className="container">
          <div className="row g-24">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="form--area">
                <div className="title-area-left">
                  <p className="pre">
                    <span>{t('preTitle1')}</span> {t('preTitle2')}
                  </p>
                  <h2 className="title">{t('title')}</h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="contact-page-form mt--30"
                >
                  <div className="name-email-wraper">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder={t('placeholderName')}
                      required
                    />
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder={t('placeholderEmail')}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t('placeholderPhone')}
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('placeholderMessage')}
                    required
                  ></textarea>

                  <button
                    disabled={loading}
                    className="rts-btn btn-primary"
                    type="submit"
                  >
                    {loading ? t('sending') : t('submit')}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="map-area-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126103.05428734896!2d38.66950664335938!3d8.997850700000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a8d5d33137%3A0x51d0cd723f979d39!2sSelam%20building!5e0!3m2!1sen!2set!4v1762959784662!5m2!1sen!2set"
                  width="100%"
                  height="690"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default ContactUsForm;
