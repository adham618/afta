import * as React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/bootstrap.css";

const RegistrationSection = () => {
  type Inputs = {
    title: string;
    firstName: string;
    middleName: string;
    SURNAME: string;
    Gender: string;
    email: string;
    phone: string;
    nationality: string;
    STATE: string;
    intraAfrica: string;
    presidential: string;
    ParticipantCategories: string;
    // Diplomat
    DiplomatCountry: string;
    NameOfOfficeOrMinistryOrDepartment: string;
    DiplomatAddress: string;
    DiplomatContactNumber: string;
    DiplomatEmail: string;
    DiplomatLocation: string;
    // Corporate
    Institution: string;
    OfficeORDepartment: string;
    CorporateAddress: string;
    CorporateContactNumber: string;
    CorporateEmail: string;
    CorporateLocation: string;
    // others
    InWhatCapacity: string;
    InterestInSummit: string;
    OthersAddress: string;
    OthersContactNumber: string;
    OthersEmail: string;
    OthersLocation: string;
    //
    sponsorThisEvent: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  //   Handling form registerOptions
  const registerOptions = {
    title: {
      required: "The Title Field is required",
      minLength: {
        value: 3,
        message: "Title must be at least 3 characters",
      },
    },
    firstName: {
      required: "The First Name Field is required",
      minLength: {
        value: 3,
        message: "First Name must be at least 3 characters",
      },
      maxLength: {
        value: 20,
        message: "First Name cannot exceed 20 characters",
      },
    },
    middleName: {
      required: "The Middle Name Field is required",
      minLength: {
        value: 3,
        message: "Middle Name must be at least 3 characters",
      },
      maxLength: {
        value: 20,
        message: "Middle Name cannot exceed 20 characters",
      },
    },
    SURNAME: {
      required: "The Surname Field is required",
      minLength: {
        value: 3,
        message: "Surname must be at least 3 characters",
      },
      maxLength: {
        value: 20,
        message: "Surname cannot exceed 20 characters",
      },
    },
    Gender: {
      required: "The Gender Field is required",
    },
    email: {
      required: "The Email Field is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    phone: {
      required: "The Phone Field is required",
      minLength: {
        value: 11,
        message: "Phone Number must be at least 11 characters",
      },
      maxLength: {
        value: 11,
        message: "Phone Number cannot exceed 11 characters",
      },
    },
    nationality: {
      required: "The Nationality Field is required",
    },
    STATE: {
      required: "The State Field is required",
    },
    ParticipantCategories: {
      required: "The Participant Categories Field is required",
    },
    // Diplomat
    DiplomatCountry: {
      required: "The Diplomat Country Field is required",
    },
    NameOfOfficeOrMinistryOrDepartment: {
      required:
        "The Name of Office or Ministry or Department Field is required",
    },
    DiplomatAddress: {
      required: "The Diplomat Address Field is required",
    },
    DiplomatContactNumber: {
      required: "The Diplomat Contact Number Field is required",
    },
    DiplomatEmail: {
      required: "The Diplomat Email Field is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    DiplomatLocation: {
      required: "The Diplomat Location Field is required",
    },
    // Corporate
    Institution: {
      required: "The Institution Field is required",
    },
    OfficeORDepartment: {
      required: "The Office or Department Field is required",
    },
    CorporateAddress: {
      required: "The Corporate Address Field is required",
    },
    CorporateContactNumber: {
      required: "The Corporate Contact Number Field is required",
    },
    CorporateEmail: {
      required: "The Corporate Email Field is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    CorporateLocation: {
      required: "The Corporate Location Field is required",
    },
    // others
    InWhatCapacity: {
      required: "The In What Capacity Field is required",
    },
    InterestInSummit: {
      required: "The Interest in Summit Field is required",
    },
    OthersAddress: {
      required: "The Others Address Field is required",
    },
    OthersContactNumber: {
      required: "The Others Contact Number Field is required",
    },
    OthersEmail: {
      required: "The Others Email Field is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    OthersLocation: {
      required: "The Others Location Field is required",
    },
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="registration-section tw-px-0 lg:tw-py-10 lg:tw-px-[70px]"
    >
      <div className="layout">
        <div className="row">
          <div className="col-md-12">
            <div className="registration-head">
              <span>"*" indicates required fields</span>
              <h3>
                Kindly complete this registration form to attend The Africa
                Prosperity Dialogues 2023 in Ghana. =
              </h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="regi-form">
              <select
                className="form-control"
                {...register("title", registerOptions.title)}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  TITLE*
                </option>
                <option value="Hon.">Hon.</option>
                <option value="H.E.">H.E.</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
                <option value="Gen.">Gen.</option>
                <option value="Sir.">Sir.</option>
                <option value="Ing.">Ing.</option>
                <option value="Esq.">Esq.</option>
                <option value="Other">Other</option>
              </select>
              {errors.title && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.title.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-3">
            <div className="regi-form">
              <input
                className="form-control"
                type="text"
                placeholder="FIRST NAME*"
                {...register("firstName", registerOptions.firstName)}
              />
              {errors.firstName && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.firstName.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-3">
            <div className="regi-form">
              <input
                className="form-control"
                type="text"
                placeholder="MIDDLE NAME*"
                {...register("middleName", registerOptions.middleName)}
              />
              {errors.middleName && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.middleName.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-3">
            <div className="regi-form">
              <input
                className="form-control"
                type="text"
                placeholder="SURNAME*"
                {...register("SURNAME", registerOptions.SURNAME)}
              />
              {errors.SURNAME && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.SURNAME.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="regi-form">
              <select
                className="form-control"
                placeholder="Gender*"
                {...register("Gender", registerOptions.Gender)}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Gender*
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.Gender && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.Gender.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="regi-form">
              <input
                className="form-control"
                type="email"
                placeholder="Email*"
                {...register("email", registerOptions.email)}
              />
              {errors.email && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="regi-form">
              <Controller
                name="phone"
                control={control}
                // rules={registerOptions.phone}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    onChange={(value) => onChange(value)}
                    country="gh"
                    placeholder="PHONE"
                    inputClass="!tw-w-full focus:!tw-border-black focus:!tw-bg-[unset] focus:tw-shadow-outline"
                    dropdownClass="!tw-w-max"
                  />
                )}
              />
              {errors.phone && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="regi-form">
              <input
                className="form-control"
                type="text"
                placeholder="Address*"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="regi-form">
              <label htmlFor="nationality">Nationality*</label>
              <Controller
                name="nationality"
                control={control}
                rules={registerOptions.nationality}
                render={({ field: { onChange, value } }) => (
                  <CountryDropdown
                    defaultOptionLabel="Select Country*"
                    value={value}
                    onChange={(value) => onChange(value)}
                  />
                )}
              />
              {errors.nationality && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.nationality.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="regi-form">
              <label htmlFor="STATE">STATE*</label>
              <Controller
                name="STATE"
                control={control}
                rules={registerOptions.STATE}
                render={({ field: { onChange, value } }) => (
                  <RegionDropdown
                    blankOptionLabel="No country selected, please select one"
                    defaultOptionLabel="Select State*"
                    country={watch("nationality")}
                    value={value}
                    onChange={(value) => onChange(value)}
                  />
                )}
              />
              {errors.STATE && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.STATE.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="registration-summit">
              <h3>Summit Participation</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="regi-form">
              <label htmlFor="pc">Participant Categories**</label>
              <select
                {...register(
                  "ParticipantCategories",
                  registerOptions.ParticipantCategories
                )}
                id="pc"
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Corporate">Corporate</option>
                <option value="Diplomat">Diplomat</option>
                <option value="Others">Others, specify……………………</option>
              </select>
              {errors.ParticipantCategories && (
                <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                  {errors.ParticipantCategories.message}
                </span>
              )}
            </div>
          </div>
          {watch("ParticipantCategories") === "Corporate" ? (
            <>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Institution*"
                    {...register("Institution", registerOptions.Institution)}
                  />
                  {errors.Institution && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.Institution.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder=" Office/Department.*"
                    {...register(
                      "OfficeORDepartment",
                      registerOptions.OfficeORDepartment
                    )}
                  />
                  {errors.OfficeORDepartment && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.OfficeORDepartment.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Address*"
                    {...register(
                      "CorporateAddress",
                      registerOptions.CorporateAddress
                    )}
                  />
                  {errors.CorporateAddress && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.CorporateAddress.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Contact number*"
                    {...register(
                      "CorporateContactNumber",
                      registerOptions.CorporateContactNumber
                    )}
                  />
                  {errors.CorporateContactNumber && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.CorporateContactNumber.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email*"
                    {...register(
                      "CorporateEmail",
                      registerOptions.CorporateEmail
                    )}
                  />
                  {errors.CorporateEmail && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.CorporateEmail.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Location*"
                    {...register(
                      "CorporateLocation",
                      registerOptions.CorporateLocation
                    )}
                  />
                  {errors.CorporateLocation && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.CorporateLocation.message}
                    </span>
                  )}
                </div>
              </div>
            </>
          ) : watch("ParticipantCategories") === "Diplomat" ? (
            <>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Country*"
                    {...register(
                      "DiplomatCountry",
                      registerOptions.DiplomatCountry
                    )}
                  />
                  {errors.DiplomatCountry && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.DiplomatCountry.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name of Office/Ministry/Department*"
                    {...register(
                      "NameOfOfficeOrMinistryOrDepartment",
                      registerOptions.NameOfOfficeOrMinistryOrDepartment
                    )}
                  />
                  {errors.NameOfOfficeOrMinistryOrDepartment && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.NameOfOfficeOrMinistryOrDepartment.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Address*"
                    {...register(
                      "DiplomatAddress",
                      registerOptions.DiplomatAddress
                    )}
                  />
                  {errors.DiplomatAddress && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.DiplomatAddress.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Contact number*"
                    {...register(
                      "DiplomatContactNumber",
                      registerOptions.DiplomatContactNumber
                    )}
                  />
                  {errors.DiplomatContactNumber && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.DiplomatContactNumber.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email*"
                    {...register(
                      "DiplomatEmail",
                      registerOptions.DiplomatEmail
                    )}
                  />
                  {errors.DiplomatEmail && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.DiplomatEmail.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="regi-form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Location*"
                    {...register(
                      "DiplomatLocation",
                      registerOptions.DiplomatLocation
                    )}
                  />
                  {errors.DiplomatLocation && (
                    <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                      {errors.DiplomatLocation.message}
                    </span>
                  )}
                </div>
              </div>
            </>
          ) : (
            watch("ParticipantCategories") === "Others" && (
              <>
                <div className="col-md-3">
                  <div className="regi-form">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="In what capacity*"
                      {...register(
                        "InWhatCapacity",
                        registerOptions.InWhatCapacity
                      )}
                    />
                    {errors.InWhatCapacity && (
                      <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                        {errors.InWhatCapacity.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="regi-form">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Interest in summit*"
                      {...register(
                        "InterestInSummit",
                        registerOptions.InterestInSummit
                      )}
                    />
                    {errors.InterestInSummit && (
                      <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                        {errors.InterestInSummit.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="regi-form">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address*"
                      {...register(
                        "OthersAddress",
                        registerOptions.OthersAddress
                      )}
                    />
                    {errors.OthersAddress && (
                      <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                        {errors.OthersAddress.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="regi-form">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Contact number*"
                      {...register(
                        "DiplomatContactNumber",
                        registerOptions.OthersContactNumber
                      )}
                    />
                    {errors.OthersContactNumber && (
                      <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                        {errors.OthersContactNumber.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="regi-form">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email*"
                      {...register(
                        "DiplomatEmail",
                        registerOptions.OthersEmail
                      )}
                    />
                    {errors.OthersEmail && (
                      <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                        {errors.OthersEmail.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="regi-form">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Location*"
                      {...register(
                        "OthersLocation",
                        registerOptions.OthersLocation
                      )}
                    />
                    {errors.OthersLocation && (
                      <span className="tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500">
                        {errors.OthersLocation.message}
                      </span>
                    )}
                  </div>
                </div>
              </>
            )
          )}

          <div className="col-md-12 tw-mb-5">
            <div className="regi-form !tw-mb-4">
              <label htmlFor="STATE">I will attend:*</label>
            </div>
            <div className="regi-form regi-checkbox mb-0 !tw-mb-2 !tw-items-start sm:!tw-items-center">
              <input
                className="tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-[2px] !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0"
                type="checkbox"
                id="intra-africa"
                {...register("intraAfrica")}
              />
              <label className="tw-leading-5" htmlFor="intra-africa">
                Intra-Africa Trade Forum – 26th & 27th January, 2023
              </label>
            </div>
            <div className="regi-form regi-checkbox mb-0 !tw-items-start sm:!tw-items-center">
              <input
                className="tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-[2px] !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0"
                type="checkbox"
                id="presidential"
                {...register("presidential")}
              />
              <label className="tw-leading-5" htmlFor="presidential">
                Presidential & Business Executives Dialogue – 28th January, 2023
              </label>
            </div>
          </div>
          <div className="col-md-12 tw-mb-5">
            <div className="regi-form !tw-mb-4">
              <label>Do you wish to sponsor this event? *</label>
            </div>
            <div className="regi-form regi-checkbox mb-0 !tw-mb-2 !tw-items-start sm:!tw-items-center">
              <input
                className="tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-full  !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0"
                type="radio"
                id="sponsor-this-event"
                {...register("sponsorThisEvent")}
              />
              <label className="tw-leading-5" htmlFor="sponsor-Yes">
                Yes
              </label>
            </div>
            <div className="regi-form regi-checkbox mb-0 !tw-items-start sm:!tw-items-center">
              <input
                className="tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-full  !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0"
                type="radio"
                id="sponsor-No"
                {...register("sponsorThisEvent")}
              />
              <label className="tw-leading-5" htmlFor="sponsor-No">
                No
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="regi-form">
              <button disabled={isSubmitting} className="btn btn-reg">
                Submit
              </button>
            </div>
            {isSubmitSuccessful && (
              <div className="tw-mt-2 tw-text-[14px] tw-font-bold tw-text-green-500">
                Registration Successful
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationSection;
