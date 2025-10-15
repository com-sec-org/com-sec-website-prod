import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Shield,
  Lock,
  Smartphone,
  Wifi,
  Mail,
  AlertTriangle,
  Eye,
  Key,
  Download,
  Link as LinkIcon,
  UserCheck,
} from "lucide-react";

export default function Top10OnlineSafetyTips() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-700 via-red-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs">
            <Button
              variant="ghost"
              className="text-white hover:text-orange-300 mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Button>
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <Badge className="bg-orange-600 hover:bg-orange-700">Security Tips</Badge>
            <Badge variant="outline" className="text-white border-white/20">
              Essential Guide
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Top 10 Easy Online Safety Tips Everyone Should Follow
          </h1>

          <div className="flex items-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>October 6, 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>3 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Com-Sec Team</span>
            </div>
          </div>

          <p className="text-xl text-white/90 leading-relaxed">
            Simple yet effective online safety practices that everyone can
            implement to protect their digital presence and personal information
            from cyber threats.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's digital world, online safety isn't just for tech
                experts—it's essential for everyone. Whether you're browsing
                social media, shopping online, or working from home, following
                basic cybersecurity practices can protect you from identity
                theft, financial loss, and privacy violations.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-orange-800 font-semibold mb-2">
                      Why This Matters
                    </p>
                    <p className="text-orange-700">
                      Cybercrime affects 1 in 4 people annually, with average
                      losses exceeding $1,000 per victim. These simple tips can
                      protect you from becoming another statistic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 10 Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                10 Essential Online Safety Tips
              </h2>

              <div className="space-y-8">
                {/* Tip 1 */}
                <Card className="border-l-4 border-red-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        1
                      </span>
                      <Key className="h-6 w-6 text-red-600 mr-2" />
                      Use Strong, Unique Passwords
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Create complex passwords that are at least 12 characters
                      long and include a mix of uppercase letters, lowercase
                      letters, numbers, and symbols. Most importantly, use a
                      different password for each account.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">
                        Quick Tips:
                      </h4>
                      <ul className="text-red-800 text-sm space-y-1">
                        <li>• Use a password manager to generate and store passwords</li>
                        <li>• Avoid using personal information like birthdays or names</li>
                        <li>• Consider using passphrases (e.g., "Coffee!Lake#Sunrise9")</li>
                        <li>• Never reuse passwords across multiple accounts</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 2 */}
                <Card className="border-l-4 border-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        2
                      </span>
                      <UserCheck className="h-6 w-6 text-blue-600 mr-2" />
                      Enable Two-Factor Authentication (2FA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Add an extra layer of security to your accounts by enabling
                      two-factor authentication. This requires a second form of
                      verification beyond your password, making it much harder
                      for hackers to access your accounts.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        2FA Options:
                      </h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Authenticator apps (Google Authenticator, Authy)</li>
                        <li>• SMS text messages (less secure but better than none)</li>
                        <li>• Hardware keys (most secure option)</li>
                        <li>• Email verification (for less critical accounts)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 3 */}
                <Card className="border-l-4 border-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        3
                      </span>
                      <Download className="h-6 w-6 text-green-600 mr-2" />
                      Keep Software Updated
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Regularly update your operating system, browsers, and apps.
                      These updates often include security patches that fix
                      vulnerabilities that hackers could exploit.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Auto-Update Checklist:
                      </h4>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Enable automatic updates for your operating system</li>
                        <li>• Keep browsers updated to the latest version</li>
                        <li>• Update mobile apps regularly</li>
                        <li>• Don't ignore security update notifications</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 4 */}
                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        4
                      </span>
                      <Mail className="h-6 w-6 text-purple-600 mr-2" />
                      Be Wary of Phishing Emails
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Phishing emails trick you into giving away personal
                      information or downloading malware. Be suspicious of
                      urgent requests, unexpected attachments, or links from
                      unknown senders.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">
                        Red Flags to Watch For:
                      </h4>
                      <ul className="text-purple-800 text-sm space-y-1">
                        <li>• Urgent language ("Act now!" "Your account will be closed!")</li>
                        <li>• Requests for personal information via email</li>
                        <li>• Suspicious links or attachments</li>
                        <li>• Generic greetings ("Dear Customer" instead of your name)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 5 */}
                <Card className="border-l-4 border-yellow-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        5
                      </span>
                      <Wifi className="h-6 w-6 text-yellow-600 mr-2" />
                      Use Secure Wi-Fi Networks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Avoid using public Wi-Fi for sensitive activities like
                      banking or shopping. If you must use public Wi-Fi, use a
                      VPN to encrypt your connection and protect your data.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">
                        Wi-Fi Security Tips:
                      </h4>
                      <ul className="text-yellow-800 text-sm space-y-1">
                        <li>• Use your mobile hotspot instead of public Wi-Fi when possible</li>
                        <li>• Look for "HTTPS" in website URLs when browsing</li>
                        <li>• Disable auto-connect to Wi-Fi networks</li>
                        <li>• Turn off file sharing when on public networks</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 6 */}
                <Card className="border-l-4 border-indigo-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        6
                      </span>
                      <Eye className="h-6 w-6 text-indigo-600 mr-2" />
                      Review Privacy Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Regularly review and adjust privacy settings on social
                      media platforms and online accounts. Limit who can see
                      your personal information and posts.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">
                        Privacy Actions:
                      </h4>
                      <ul className="text-indigo-800 text-sm space-y-1">
                        <li>• Set social media profiles to private</li>
                        <li>• Limit personal information in your profiles</li>
                        <li>• Review what apps have access to your accounts</li>
                        <li>• Turn off location tracking when not needed</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 7 */}
                <Card className="border-l-4 border-teal-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        7
                      </span>
                      <LinkIcon className="h-6 w-6 text-teal-600 mr-2" />
                      Think Before You Click
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Be cautious about clicking links in emails, text messages,
                      or social media posts. Hover over links to see where they
                      really lead before clicking.
                    </p>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-900 mb-2">
                        Link Safety Checklist:
                      </h4>
                      <ul className="text-teal-800 text-sm space-y-1">
                        <li>• Hover over links to preview the destination</li>
                        <li>• Type URLs directly instead of clicking suspicious links</li>
                        <li>• Be extra careful with shortened URLs (bit.ly, tinyurl)</li>
                        <li>• Don't click links in unexpected emails or messages</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 8 */}
                <Card className="border-l-4 border-pink-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        8
                      </span>
                      <Smartphone className="h-6 w-6 text-pink-600 mr-2" />
                      Secure Your Mobile Devices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Your smartphone and tablet contain sensitive information.
                      Use screen locks, enable device encryption, and be
                      careful about which apps you download.
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-900 mb-2">
                        Mobile Security Essentials:
                      </h4>
                      <ul className="text-pink-800 text-sm space-y-1">
                        <li>• Use a strong passcode, PIN, or biometric lock</li>
                        <li>• Download apps only from official app stores</li>
                        <li>• Enable remote wipe in case your device is stolen</li>
                        <li>• Keep your mobile operating system updated</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 9 */}
                <Card className="border-l-4 border-orange-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        9
                      </span>
                      <Lock className="h-6 w-6 text-orange-600 mr-2" />
                      Shop Safely Online
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      When shopping online, only use reputable websites and
                      look for security indicators. Avoid storing payment
                      information unnecessarily.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">
                        Safe Shopping Guidelines:
                      </h4>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>• Look for "HTTPS" and the padlock icon in your browser</li>
                        <li>• Use credit cards instead of debit cards for better protection</li>
                        <li>• Shop from trusted, well-known retailers</li>
                        <li>• Monitor your bank statements for unauthorized charges</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Tip 10 */}
                <Card className="border-l-4 border-gray-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <span className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                        10
                      </span>
                      <AlertTriangle className="h-6 w-6 text-gray-600 mr-2" />
                      Trust Your Instincts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      If something feels suspicious or too good to be true,
                      it probably is. Take a moment to verify before sharing
                      personal information or making financial decisions online.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Warning Signs:
                      </h4>
                      <ul className="text-gray-800 text-sm space-y-1">
                        <li>• Offers that seem too good to be true</li>
                        <li>• Unexpected prize notifications or lottery winnings</li>
                        <li>• Requests for immediate action or payment</li>
                        <li>• Poor grammar or spelling in official communications</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quick Reference Card */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Quick Reference Guide
              </h2>

              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-center text-blue-900">
                    10 Online Safety Tips - Quick Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Use strong, unique passwords</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Enable two-factor authentication</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Keep software updated</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Be wary of phishing emails</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Use secure Wi-Fi networks</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Review privacy settings</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Think before you click</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Secure your mobile devices</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Shop safely online</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Trust your instincts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Stay Safe Online
              </h2>

              <p className="text-gray-700 mb-6">
                Online safety doesn't require technical expertise—just common
                sense and good habits. By following these 10 simple tips, you
                can significantly reduce your risk of becoming a victim of
                cybercrime and enjoy the internet with greater peace of mind.
              </p>

              <p className="text-gray-700 mb-8">
                Remember, cybersecurity is an ongoing process, not a one-time
                setup. Stay informed about new threats, keep your defenses
                updated, and continue practicing safe online habits.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">
                  Need Professional Cybersecurity Support?
                </h4>
                <p className="text-orange-800 mb-4">
                  While these tips are great for personal protection, businesses
                  need comprehensive cybersecurity strategies. Com-Sec helps
                  organizations implement robust security measures and compliance
                  frameworks.
                </p>
                <Link to="/contact">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Get Professional Security Consultation
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
