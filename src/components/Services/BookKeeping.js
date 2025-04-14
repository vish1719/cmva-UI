import React, { useEffect } from 'react';
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2';
import BookKeepBanner from './BookKeepBanner';
import Seo from "../Seo";

function BookKeeping() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Seo
        title="Small Business Bookkeeping & Accounting | ConnectMyVA Services"
        description="Simplify your finances with ConnectMyVA! We offer expert small business bookkeeping, bill payment assistance, and top-notch bookkeeping and accounting services. Save time & money with our team handling your daily entries, invoices, and payroll."
        path="/bookkeeping"
        keywords="Small Business Bookkeeping, book keeping services, bookkeeping services, accounting and booking keeping services, book keeping and accounting services, Bill Payment Assistance, Business Accounting Solutions, booking keeping services, accounting services, Improve Business Efficiency, Online Business Support, Virtual Assistant for Business, Virtual Digital Assistant"
      />

      <BookKeepBanner />
      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="row d-flex align-items-stretch">
            <div className="col-lg-12 faq-item" data-aos="fade-up">
              <h4>Accounting &amp; Bookkeeping Assistance</h4>
              <p>
                Accounting and documentation are the main keys to the financial fortune of any business
                enterprise. Outsourcing your accounting and bookkeeping (A&amp;B) to professional experts not only
                saves you time and money but also minimizes your obligations.

                ConnectMyVA’s A&amp;B assisting team offers a set of assistance in bookkeeping, accounting, CPA Tax
                imposition along with the accounting of individuals, entrepreneurs, and organizations.
              </p>
            </div>
          </div>

          <div className="section-title">
            <h1>Book Keeping Services</h1>
          </div>

          <div className="row d-flex align-items-stretch">
            <div className="col-lg-4 col-md-6 faq-item" data-aos="fade-up">
              <h4>Transactional Tasks</h4>
              <p>
                <i className="icofont-rounded-right"></i> Daily Accounting Entry<br />
                <i className="icofont-rounded-right"></i> Monthly Financial Reporting<br />
                <i className="icofont-rounded-right"></i> Invoices (Buyer &amp; Vendor)<br />
                <i className="icofont-rounded-right"></i> Payroll<br />
                <i className="icofont-rounded-right"></i> Tax Deposits<br />
                <i className="icofont-rounded-right"></i> Credit Cards<br />
                <i className="icofont-rounded-right"></i> &amp; More…
              </p>
            </div>

            <div className="col-lg-4 col-md-6 faq-item" data-aos="fade-up" data-aos-delay="100">
              <h4>Administration Activities</h4>
              <p>
                <i className="icofont-rounded-right"></i> Entering &amp; Paying Bills<br />
                <i className="icofont-rounded-right"></i> Invoicing<br />
                <i className="icofont-rounded-right"></i> General Ledger Entries<br />
                <i className="icofont-rounded-right"></i> Tracking Payments and Adjustments<br />
                <i className="icofont-rounded-right"></i> Accounts Payable &amp; Receivable<br />
                <i className="icofont-rounded-right"></i> Organizing Email &amp; Faxes<br />
                <i className="icofont-rounded-right"></i> &amp; More…
              </p>
            </div>

            <div className="col-lg-4 col-md-6 faq-item" data-aos="fade-up" data-aos-delay="200">
              <h4>Reconciliation Reporting</h4>
              <p>
                <i className="icofont-rounded-right"></i> Payable &amp; Receivable Accounts<br />
                <i className="icofont-rounded-right"></i> Customer and Vendor Invoices<br />
                <i className="icofont-rounded-right"></i> Payment Collections<br />
                <i className="icofont-rounded-right"></i> Payroll Process<br />
                <i className="icofont-rounded-right"></i> Credit Cards<br />
                <i className="icofont-rounded-right"></i> &amp; More…
              </p>
            </div>

            <div className="col-lg-4 col-md-6 faq-item" data-aos="fade-up" data-aos-delay="300">
              <h4>Accounting Services</h4>
              <p>
                <i className="icofont-rounded-right"></i> Documenting Financial Entries<br />
                <i className="icofont-rounded-right"></i> Financial Reviews<br />
                <i className="icofont-rounded-right"></i> Cutting Down Budget<br />
                <i className="icofont-rounded-right"></i> Control of Financial Policy<br />
                <i className="icofont-rounded-right"></i> Supervision of Client Performance<br />
                <i className="icofont-rounded-right"></i> Adjustment Entry Preparation<br />
                <i className="icofont-rounded-right"></i> Prevention of errors and frauds<br />
                <i className="icofont-rounded-right"></i> Associating with Client’s CPA on tax accounting<br />
                <i className="icofont-rounded-right"></i> Accruals, prepaid &amp; more…
              </p>
            </div>
          </div>

          <Hyperlinks2 />
        </div>
      </section>
    </>
  );
}

export default BookKeeping;
