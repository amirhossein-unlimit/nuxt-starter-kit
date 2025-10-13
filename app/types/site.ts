/**
 * Represents general information about a website or web application.
 */
export interface Site {
  /**
   * URL or file path to the site's logo.
   * @type {string}
   */
  logo: string;

  /**
   * The official name of the site.
   * @type {string}
   */
  name: string;

  /**
   * A short description for the site.
   * @type {string}
   */
  desc: string;

  /**
   * The physical address associated with the site.
   * @type {string}
   */
  address: string;

  /**
   * The contact phone number for the site (typically in international format).
   * @type {string}
   */
  phone: string;

  /**
   * An array of social media links associated with the site.
   * Each item includes a URL, icon reference, link title, and platform name.
   * @type {{
   *   link: string,
   *   icon: string,
   *   name: string
   * }[]}
   */
  socials: {
    /**
     * The URL to the social media profile.
     * @type {string}
     */
    link: string;

    /**
     * Use the `i-custom-` prefix followed by the icon name (e.g., `i-custom-instagram`)
     * @type {string}
     */
    icon: string;

    /**
     * The name of the social media platform (e.g., "Instagram", "Twitter").
     * @type {string}
     */
    name: string;
  }[];

  /**
   * Footer credit or copyright text (e.g., "All rights reserved").
   * @type {string}
   */
  credits: string;
}
