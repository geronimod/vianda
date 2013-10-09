<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>NoMethodError at &#x2F;assets&#x2F;application.js</title>

  <script type="text/javascript">
  //<!--
  function toggle(id) {
    var pre  = document.getElementById("pre-" + id);
    var post = document.getElementById("post-" + id);
    var context = document.getElementById("context-" + id);

    if (pre.style.display == 'block') {
      pre.style.display = 'none';
      post.style.display = 'none';
      context.style.background = "none";
    } else {
      pre.style.display = 'block';
      post.style.display = 'block';
      context.style.background = "#fffed9";
    }
  }

  function toggleBacktrace(){
    var bt = document.getElementById("backtrace");
    var toggler = document.getElementById("expando");

    if (bt.className == 'condensed') {
      bt.className = 'expanded';
      toggler.innerHTML = "(condense)";
    } else {
      bt.className = 'condensed';
      toggler.innerHTML = "(expand)";
    }
  }
  //-->
  </script>

<style type="text/css" media="screen">
  *                   {margin: 0; padding: 0; border: 0; outline: 0;}
  div.clear           {clear: both;}
  body                {background: #EEEEEE; margin: 0; padding: 0;
                       font-family: 'Lucida Grande', 'Lucida Sans Unicode',
                       'Garuda';}
  code                {font-family: 'Lucida Console', monospace;
                       font-size: 12px;}
  li                  {height: 18px;}
  ul                  {list-style: none; margin: 0; padding: 0;}
  ol:hover            {cursor: pointer;}
  ol li               {white-space: pre;}
  #explanation        {font-size: 12px; color: #666666;
                       margin: 20px 0 0 100px;}
/* WRAP */
  #wrap               {width: 1000px; background: #FFFFFF; margin: 0 auto;
                       padding: 30px 50px 20px 50px;
                       border-left: 1px solid #DDDDDD;
                       border-right: 1px solid #DDDDDD;}
/* HEADER */
  #header             {margin: 0 auto 25px auto;}
  #header img         {float: left;}
  #header #summary    {float: left; margin: 12px 0 0 20px; width:660px;
                       font-family: 'Lucida Grande', 'Lucida Sans Unicode';}
  h1                  {margin: 0; font-size: 36px; color: #981919;}
  h2                  {margin: 0; font-size: 22px; color: #333333;}
  #header ul          {margin: 0; font-size: 12px; color: #666666;}
  #header ul li strong{color: #444444;}
  #header ul li       {display: inline; padding: 0 10px;}
  #header ul li.first {padding-left: 0;}
  #header ul li.last  {border: 0; padding-right: 0;}
/* BODY */
  #backtrace,
  #get,
  #post,
  #cookies,
  #rack               {width: 980px; margin: 0 auto 10px auto;}
  p#nav               {float: right; font-size: 14px;}
/* BACKTRACE */
  a#expando           {float: left; padding-left: 5px; color: #666666;
                      font-size: 14px; text-decoration: none; cursor: pointer;}
  a#expando:hover     {text-decoration: underline;}
  h3                  {float: left; width: 100px; margin-bottom: 10px;
                       color: #981919; font-size: 14px; font-weight: bold;}
  #nav a              {color: #666666; text-decoration: none; padding: 0 5px;}
  #backtrace li.frame-info {background: #f7f7f7; padding-left: 10px;
                           font-size: 12px; color: #333333;}
  #backtrace ul       {list-style-position: outside; border: 1px solid #E9E9E9;
                       border-bottom: 0;}
  #backtrace ol       {width: 920px; margin-left: 50px;
                       font: 10px 'Lucida Console', monospace; color: #666666;}
  #backtrace ol li    {border: 0; border-left: 1px solid #E9E9E9;
                       padding: 2px 0;}
  #backtrace ol code  {font-size: 10px; color: #555555; padding-left: 5px;}
  #backtrace-ul li    {border-bottom: 1px solid #E9E9E9; height: auto;
                       padding: 3px 0;}
  #backtrace-ul .code {padding: 6px 0 4px 0;}
  #backtrace.condensed .system,
  #backtrace.condensed .framework {display:none;}
/* REQUEST DATA */
  p.no-data           {padding-top: 2px; font-size: 12px; color: #666666;}
  table.req           {width: 980px; text-align: left; font-size: 12px;
                       color: #666666; padding: 0; border-spacing: 0;
                       border: 1px solid #EEEEEE; border-bottom: 0;
                       border-left: 0;
                       clear:both}
  table.req tr th     {padding: 2px 10px; font-weight: bold;
                       background: #F7F7F7; border-bottom: 1px solid #EEEEEE;
                       border-left: 1px solid #EEEEEE;}
  table.req tr td     {padding: 2px 20px 2px 10px;
                       border-bottom: 1px solid #EEEEEE;
                       border-left: 1px solid #EEEEEE;}
/* HIDE PRE/POST CODE AT START */
  .pre-context,
  .post-context       {display: none;}

  table td.code       {width:750px}
  table td.code div   {width:750px;overflow:hidden}
</style>
</head>
<body>
  <div id="wrap">
    <div id="header">
      <img src="/__sinatra__/500.png" alt="application error" height="161" width="313" />
      <div id="summary">
        <h1><strong>NoMethodError</strong> at <strong>&#x2F;assets&#x2F;application.js
          </strong></h1>
        <h2>undefined method `[]&#x27; for nil:NilClass</h2>
        <ul>
          <li class="first"><strong>file:</strong> <code>
            jsmin.rb</code></li>
          <li><strong>location:</strong> <code>block in nextchar
            </code></li>
          <li class="last"><strong>line:
            </strong> 221</li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>

    <div id="backtrace" class='condensed'>
      <h3>BACKTRACE</h3>
      <p><a href="#" id="expando"
            onclick="toggleBacktrace(); return false">(expand)</a></p>
      <p id="nav"><strong>JUMP TO:</strong>
         <a href="#get-info">GET</a>
         <a href="#post-info">POST</a>
         <a href="#cookie-info">COOKIES</a>
         <a href="#env-info">ENV</a>
      </p>
      <div class="clear"></div>

      <ul id="backtrace-ul">

      
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>block in nextchar</strong></code>
            </li>

            <li class="code system">
              
              <ol start="214"
                  class="pre-context" id="pre-1"
                  onclick="toggle(1);">
                
                <li class="pre-context-line"><code>      c = get
</code></li>
                
                <li class="pre-context-line"><code>      return c unless c == CHR_FRONTSLASH
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      case peek
</code></li>
                
                <li class="pre-context-line"><code>      when CHR_FRONTSLASH
</code></li>
                
                <li class="pre-context-line"><code>        loop do
</code></li>
                
                <li class="pre-context-line"><code>          c = get
</code></li>
                
              </ol>
              

              <ol start="221" class="context" id="1"
                  onclick="toggle(1);">
                <li class="context-line" id="context-1"><code>          return c if c[0] &lt;= ORD_LF</code></li>
              </ol>

              
              <ol start="222" class="post-context"
                  id="post-1" onclick="toggle(1);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      when CHR_ASTERISK
</code></li>
                
                <li class="post-context-line"><code>        get
</code></li>
                
                <li class="post-context-line"><code>        loop do
</code></li>
                
                <li class="post-context-line"><code>          case get
</code></li>
                
                <li class="post-context-line"><code>          when CHR_ASTERISK
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>loop</strong></code>
            </li>

            <li class="code system">
              
              <ol start="212"
                  class="pre-context" id="pre-2"
                  onclick="toggle(2);">
                
                <li class="pre-context-line"><code>    # Gets the next character, excluding comments.
</code></li>
                
                <li class="pre-context-line"><code>    def nextchar
</code></li>
                
                <li class="pre-context-line"><code>      c = get
</code></li>
                
                <li class="pre-context-line"><code>      return c unless c == CHR_FRONTSLASH
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      case peek
</code></li>
                
                <li class="pre-context-line"><code>      when CHR_FRONTSLASH
</code></li>
                
              </ol>
              

              <ol start="219" class="context" id="2"
                  onclick="toggle(2);">
                <li class="context-line" id="context-2"><code>        loop do</code></li>
              </ol>

              
              <ol start="220" class="post-context"
                  id="post-2" onclick="toggle(2);">
                
                <li class="post-context-line"><code>          c = get
</code></li>
                
                <li class="post-context-line"><code>          return c if c[0] &lt;= ORD_LF
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      when CHR_ASTERISK
</code></li>
                
                <li class="post-context-line"><code>        get
</code></li>
                
                <li class="post-context-line"><code>        loop do
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>nextchar</strong></code>
            </li>

            <li class="code system">
              
              <ol start="212"
                  class="pre-context" id="pre-3"
                  onclick="toggle(3);">
                
                <li class="pre-context-line"><code>    # Gets the next character, excluding comments.
</code></li>
                
                <li class="pre-context-line"><code>    def nextchar
</code></li>
                
                <li class="pre-context-line"><code>      c = get
</code></li>
                
                <li class="pre-context-line"><code>      return c unless c == CHR_FRONTSLASH
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      case peek
</code></li>
                
                <li class="pre-context-line"><code>      when CHR_FRONTSLASH
</code></li>
                
              </ol>
              

              <ol start="219" class="context" id="3"
                  onclick="toggle(3);">
                <li class="context-line" id="context-3"><code>        loop do</code></li>
              </ol>

              
              <ol start="220" class="post-context"
                  id="post-3" onclick="toggle(3);">
                
                <li class="post-context-line"><code>          c = get
</code></li>
                
                <li class="post-context-line"><code>          return c if c[0] &lt;= ORD_LF
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      when CHR_ASTERISK
</code></li>
                
                <li class="post-context-line"><code>        get
</code></li>
                
                <li class="post-context-line"><code>        loop do
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>action_get</strong></code>
            </li>

            <li class="code system">
              
              <ol start="162"
                  class="pre-context" id="pre-4"
                  onclick="toggle(4);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      action_get
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Corresponds to action(3) in jsmin.c.
</code></li>
                
                <li class="pre-context-line"><code>    def action_get
</code></li>
                
              </ol>
              

              <ol start="169" class="context" id="4"
                  onclick="toggle(4);">
                <li class="context-line" id="context-4"><code>      @b = nextchar</code></li>
              </ol>

              
              <ol start="170" class="post-context"
                  id="post-4" onclick="toggle(4);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      if @b == CHR_FRONTSLASH &amp;&amp; (@a == CHR_LF || @a =~ &#x2F;[\(,=:\[!&amp;|?{};]&#x2F;)
</code></li>
                
                <li class="post-context-line"><code>        @output &lt;&lt; @a
</code></li>
                
                <li class="post-context-line"><code>        @output &lt;&lt; @b
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        loop do
</code></li>
                
                <li class="post-context-line"><code>          @a = get
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>minify</strong></code>
            </li>

            <li class="code system">
              
              <ol start="111"
                  class="pre-context" id="pre-5"
                  onclick="toggle(5);">
                
                <li class="pre-context-line"><code>          elsif @b == CHR_LF
</code></li>
                
                <li class="pre-context-line"><code>            if @a =~ &#x2F;[}\]\)\\&quot;+-]&#x2F;
</code></li>
                
                <li class="pre-context-line"><code>              action_output
</code></li>
                
                <li class="pre-context-line"><code>            else
</code></li>
                
                <li class="pre-context-line"><code>              if alphanum?(@a)
</code></li>
                
                <li class="pre-context-line"><code>                action_output
</code></li>
                
                <li class="pre-context-line"><code>              else
</code></li>
                
              </ol>
              

              <ol start="118" class="context" id="5"
                  onclick="toggle(5);">
                <li class="context-line" id="context-5"><code>                action_get</code></li>
              </ol>

              
              <ol start="119" class="post-context"
                  id="post-5" onclick="toggle(5);">
                
                <li class="post-context-line"><code>              end
</code></li>
                
                <li class="post-context-line"><code>            end
</code></li>
                
                <li class="post-context-line"><code>          else
</code></li>
                
                <li class="post-context-line"><code>            action_output
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;engines&#x2F;jsmin.rb</code> in
                <code><strong>js</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1"
                  class="pre-context" id="pre-6"
                  onclick="toggle(6);">
                
                <li class="pre-context-line"><code>module Sinatra::AssetPack
</code></li>
                
                <li class="pre-context-line"><code>  class JsminEngine &lt; Engine
</code></li>
                
                <li class="pre-context-line"><code>    def js(str, options={})
</code></li>
                
                <li class="pre-context-line"><code>      require &#x27;jsmin&#x27;
</code></li>
                
              </ol>
              

              <ol start="5" class="context" id="6"
                  onclick="toggle(6);">
                <li class="context-line" id="context-6"><code>      JSMin.minify str</code></li>
              </ol>

              
              <ol start="6" class="post-context"
                  id="post-6" onclick="toggle(6);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>  Compressor.register :js, :jsmin, JsminEngine
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;compressor.rb</code> in
                <code><strong>compress</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="16"
                  class="pre-context" id="pre-7"
                  onclick="toggle(7);">
                
                <li class="pre-context-line"><code>        raise Error, &quot;Engine #{engine} (#{type}) doesn&#x27;t exist.&quot;  unless klass
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        # Ensure that the engine can support that type.
</code></li>
                
                <li class="pre-context-line"><code>        engine = klass.new
</code></li>
                
                <li class="pre-context-line"><code>        raise Error, &quot;#{klass} does not support #{type.upcase} compression.&quot;  unless engine.respond_to?(type)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        # Build it using the engine, and fallback to defaults if it fails.
</code></li>
                
              </ol>
              

              <ol start="23" class="context" id="7"
                  onclick="toggle(7);">
                <li class="context-line" id="context-7"><code>        output   = engine.send type, str, options</code></li>
              </ol>

              
              <ol start="24" class="post-context"
                  id="post-7" onclick="toggle(7);">
                
                <li class="post-context-line"><code>        output ||= fallback(str, type, options)  unless options[:no_fallback]
</code></li>
                
                <li class="post-context-line"><code>        output
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Compresses a given string using the default engines.
</code></li>
                
                <li class="post-context-line"><code>      def fallback(str, type, options)
</code></li>
                
                <li class="post-context-line"><code>        if type == :js
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;package.rb</code> in
                <code><strong>minify</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="87"
                  class="pre-context" id="pre-8"
                  onclick="toggle(8);">
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def minify
</code></li>
                
                <li class="pre-context-line"><code>        engine  = @assets.send(:&quot;#{@type}_compression&quot;)
</code></li>
                
                <li class="pre-context-line"><code>        options = @assets.send(:&quot;#{@type}_compression_options&quot;)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="94" class="context" id="8"
                  onclick="toggle(8);">
                <li class="context-line" id="context-8"><code>        Compressor.compress combined, @type, engine, options</code></li>
              </ol>

              
              <ol start="95" class="post-context"
                  id="post-8" onclick="toggle(8);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # The cache hash.
</code></li>
                
                <li class="post-context-line"><code>      def hash
</code></li>
                
                <li class="post-context-line"><code>        if @assets.app.development?
</code></li>
                
                <li class="post-context-line"><code>          &quot;#{name}.#{type}&#x2F;#{mtime}&quot;
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;class_methods.rb</code> in
                <code><strong>block (3 levels) in add_compressed_routes!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="25"
                  class="pre-context" id="pre-9"
                  onclick="toggle(9);">
                
                <li class="pre-context-line"><code>        assets.packages.each do |name, package|
</code></li>
                
                <li class="pre-context-line"><code>          get package.route_regex do
</code></li>
                
                <li class="pre-context-line"><code>            if defined?(settings.assets.app.clear_tilt_cache) &amp;&amp; settings.assets.app.clear_tilt_cache
</code></li>
                
                <li class="pre-context-line"><code>              AssetPack.clear_tilt_cache!(@template_cache, settings.assets.app)
</code></li>
                
                <li class="pre-context-line"><code>            end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>            mtime, contents = @template_cache.fetch(package.path) {
</code></li>
                
              </ol>
              

              <ol start="32" class="context" id="9"
                  onclick="toggle(9);">
                <li class="context-line" id="context-9"><code>              [ package.mtime, package.minify ]</code></li>
              </ol>

              
              <ol start="33" class="post-context"
                  id="post-9" onclick="toggle(9);">
                
                <li class="post-context-line"><code>            }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>            content_type package.type
</code></li>
                
                <li class="post-context-line"><code>            last_modified mtime
</code></li>
                
                <li class="post-context-line"><code>            assets_expires
</code></li>
                
                <li class="post-context-line"><code>            contents
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;tilt-1.4.1&#x2F;lib&#x2F;tilt.rb</code> in
                <code><strong>fetch</strong></code>
            </li>

            <li class="code system">
              
              <ol start="120"
                  class="pre-context" id="pre-10"
                  onclick="toggle(10);">
                
                <li class="pre-context-line"><code>  # Subsequent invocations return the already loaded template object.
</code></li>
                
                <li class="pre-context-line"><code>  class Cache
</code></li>
                
                <li class="pre-context-line"><code>    def initialize
</code></li>
                
                <li class="pre-context-line"><code>      @cache = {}
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def fetch(*key)
</code></li>
                
              </ol>
              

              <ol start="127" class="context" id="10"
                  onclick="toggle(10);">
                <li class="context-line" id="context-10"><code>      @cache[key] ||= yield</code></li>
              </ol>

              
              <ol start="128" class="post-context"
                  id="post-10" onclick="toggle(10);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def clear
</code></li>
                
                <li class="post-context-line"><code>      @cache = {}
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;class_methods.rb</code> in
                <code><strong>block (2 levels) in add_compressed_routes!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="24"
                  class="pre-context" id="pre-11"
                  onclick="toggle(11);">
                
                <li class="pre-context-line"><code>      def add_compressed_routes!
</code></li>
                
                <li class="pre-context-line"><code>        assets.packages.each do |name, package|
</code></li>
                
                <li class="pre-context-line"><code>          get package.route_regex do
</code></li>
                
                <li class="pre-context-line"><code>            if defined?(settings.assets.app.clear_tilt_cache) &amp;&amp; settings.assets.app.clear_tilt_cache
</code></li>
                
                <li class="pre-context-line"><code>              AssetPack.clear_tilt_cache!(@template_cache, settings.assets.app)
</code></li>
                
                <li class="pre-context-line"><code>            end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="31" class="context" id="11"
                  onclick="toggle(11);">
                <li class="context-line" id="context-11"><code>            mtime, contents = @template_cache.fetch(package.path) {</code></li>
              </ol>

              
              <ol start="32" class="post-context"
                  id="post-11" onclick="toggle(11);">
                
                <li class="post-context-line"><code>              [ package.mtime, package.minify ]
</code></li>
                
                <li class="post-context-line"><code>            }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>            content_type package.type
</code></li>
                
                <li class="post-context-line"><code>            last_modified mtime
</code></li>
                
                <li class="post-context-line"><code>            assets_expires
</code></li>
                
                <li class="post-context-line"><code>            contents
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1534"
                  class="pre-context" id="pre-12"
                  onclick="toggle(12);">
                
                <li class="pre-context-line"><code>        method_name             = &quot;#{verb} #{path}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        unbound_method          = generate_method(method_name, &amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        pattern, keys           = compile path
</code></li>
                
                <li class="pre-context-line"><code>        conditions, @conditions = @conditions, []
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        wrapper                 = block.arity != 0 ?
</code></li>
                
                <li class="pre-context-line"><code>          proc { |a,p| unbound_method.bind(a).call(*p) } :
</code></li>
                
              </ol>
              

              <ol start="1541" class="context" id="12"
                  onclick="toggle(12);">
                <li class="context-line" id="context-12"><code>          proc { |a,p| unbound_method.bind(a).call }</code></li>
              </ol>

              
              <ol start="1542" class="post-context"
                  id="post-12" onclick="toggle(12);">
                
                <li class="post-context-line"><code>        wrapper.instance_variable_set(:@route_name, method_name)
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        [ pattern, keys, conditions, wrapper ]
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def compile(path)
</code></li>
                
                <li class="post-context-line"><code>        if path.respond_to? :to_str
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in compile!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1534"
                  class="pre-context" id="pre-13"
                  onclick="toggle(13);">
                
                <li class="pre-context-line"><code>        method_name             = &quot;#{verb} #{path}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        unbound_method          = generate_method(method_name, &amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        pattern, keys           = compile path
</code></li>
                
                <li class="pre-context-line"><code>        conditions, @conditions = @conditions, []
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        wrapper                 = block.arity != 0 ?
</code></li>
                
                <li class="pre-context-line"><code>          proc { |a,p| unbound_method.bind(a).call(*p) } :
</code></li>
                
              </ol>
              

              <ol start="1541" class="context" id="13"
                  onclick="toggle(13);">
                <li class="context-line" id="context-13"><code>          proc { |a,p| unbound_method.bind(a).call }</code></li>
              </ol>

              
              <ol start="1542" class="post-context"
                  id="post-13" onclick="toggle(13);">
                
                <li class="post-context-line"><code>        wrapper.instance_variable_set(:@route_name, method_name)
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        [ pattern, keys, conditions, wrapper ]
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def compile(path)
</code></li>
                
                <li class="post-context-line"><code>        if path.respond_to? :to_str
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>[]</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="943"
                  class="pre-context" id="pre-14"
                  onclick="toggle(14);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block = nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
                <li class="pre-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
                <li class="pre-context-line"><code>            env[&#x27;sinatra.route&#x27;] = block.instance_variable_get(:@route_name)
</code></li>
                
              </ol>
              

              <ol start="950" class="context" id="14"
                  onclick="toggle(14);">
                <li class="context-line" id="context-14"><code>            route_eval { block[*args] }</code></li>
              </ol>

              
              <ol start="951" class="post-context"
                  id="post-14" onclick="toggle(14);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
                <li class="post-context-line"><code>        return route!(base.superclass, pass_block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block (3 levels) in route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="943"
                  class="pre-context" id="pre-15"
                  onclick="toggle(15);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block = nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
                <li class="pre-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
                <li class="pre-context-line"><code>            env[&#x27;sinatra.route&#x27;] = block.instance_variable_get(:@route_name)
</code></li>
                
              </ol>
              

              <ol start="950" class="context" id="15"
                  onclick="toggle(15);">
                <li class="context-line" id="context-15"><code>            route_eval { block[*args] }</code></li>
              </ol>

              
              <ol start="951" class="post-context"
                  id="post-15" onclick="toggle(15);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
                <li class="post-context-line"><code>        return route!(base.superclass, pass_block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>route_eval</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="959"
                  class="pre-context" id="pre-16"
                  onclick="toggle(16);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      route_eval(&amp;pass_block) if pass_block
</code></li>
                
                <li class="pre-context-line"><code>      route_missing
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run a route block and throw :halt with the result.
</code></li>
                
                <li class="pre-context-line"><code>    def route_eval
</code></li>
                
              </ol>
              

              <ol start="966" class="context" id="16"
                  onclick="toggle(16);">
                <li class="context-line" id="context-16"><code>      throw :halt, yield</code></li>
              </ol>

              
              <ol start="967" class="post-context"
                  id="post-16" onclick="toggle(16);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # If the current request matches pattern and conditions, fill params
</code></li>
                
                <li class="post-context-line"><code>    # with keys and call the given block.
</code></li>
                
                <li class="post-context-line"><code>    # Revert params afterwards.
</code></li>
                
                <li class="post-context-line"><code>    #
</code></li>
                
                <li class="post-context-line"><code>    # Returns pass block.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block (2 levels) in route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="943"
                  class="pre-context" id="pre-17"
                  onclick="toggle(17);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block = nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
                <li class="pre-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
                <li class="pre-context-line"><code>            env[&#x27;sinatra.route&#x27;] = block.instance_variable_get(:@route_name)
</code></li>
                
              </ol>
              

              <ol start="950" class="context" id="17"
                  onclick="toggle(17);">
                <li class="context-line" id="context-17"><code>            route_eval { block[*args] }</code></li>
              </ol>

              
              <ol start="951" class="post-context"
                  id="post-17" onclick="toggle(17);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
                <li class="post-context-line"><code>        return route!(base.superclass, pass_block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in process_route</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="980"
                  class="pre-context" id="pre-18"
                  onclick="toggle(18);">
                
                <li class="pre-context-line"><code>      if values.any?
</code></li>
                
                <li class="pre-context-line"><code>        original, @params = params, params.merge(&#x27;splat&#x27; =&gt; [], &#x27;captures&#x27; =&gt; values)
</code></li>
                
                <li class="pre-context-line"><code>        keys.zip(values) { |k,v| Array === @params[k] ? @params[k] &lt;&lt; v : @params[k] = v if v }
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      catch(:pass) do
</code></li>
                
                <li class="pre-context-line"><code>        conditions.each { |c| throw :pass if c.bind(self).call == false }
</code></li>
                
              </ol>
              

              <ol start="987" class="context" id="18"
                  onclick="toggle(18);">
                <li class="context-line" id="context-18"><code>        block ? block[self, values] : yield(self, values)</code></li>
              </ol>

              
              <ol start="988" class="post-context"
                  id="post-18" onclick="toggle(18);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = original if original
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # No matching route was found or all routes passed. The default
</code></li>
                
                <li class="post-context-line"><code>    # implementation is to forward the request downstream when running
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>catch</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="978"
                  class="pre-context" id="pre-19"
                  onclick="toggle(19);">
                
                <li class="pre-context-line"><code>      values += match.captures.to_a.map { |v| force_encoding URI.unescape(v) if v }
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      if values.any?
</code></li>
                
                <li class="pre-context-line"><code>        original, @params = params, params.merge(&#x27;splat&#x27; =&gt; [], &#x27;captures&#x27; =&gt; values)
</code></li>
                
                <li class="pre-context-line"><code>        keys.zip(values) { |k,v| Array === @params[k] ? @params[k] &lt;&lt; v : @params[k] = v if v }
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="985" class="context" id="19"
                  onclick="toggle(19);">
                <li class="context-line" id="context-19"><code>      catch(:pass) do</code></li>
              </ol>

              
              <ol start="986" class="post-context"
                  id="post-19" onclick="toggle(19);">
                
                <li class="post-context-line"><code>        conditions.each { |c| throw :pass if c.bind(self).call == false }
</code></li>
                
                <li class="post-context-line"><code>        block ? block[self, values] : yield(self, values)
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = original if original
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>process_route</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="978"
                  class="pre-context" id="pre-20"
                  onclick="toggle(20);">
                
                <li class="pre-context-line"><code>      values += match.captures.to_a.map { |v| force_encoding URI.unescape(v) if v }
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      if values.any?
</code></li>
                
                <li class="pre-context-line"><code>        original, @params = params, params.merge(&#x27;splat&#x27; =&gt; [], &#x27;captures&#x27; =&gt; values)
</code></li>
                
                <li class="pre-context-line"><code>        keys.zip(values) { |k,v| Array === @params[k] ? @params[k] &lt;&lt; v : @params[k] = v if v }
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="985" class="context" id="20"
                  onclick="toggle(20);">
                <li class="context-line" id="context-20"><code>      catch(:pass) do</code></li>
              </ol>

              
              <ol start="986" class="post-context"
                  id="post-20" onclick="toggle(20);">
                
                <li class="post-context-line"><code>        conditions.each { |c| throw :pass if c.bind(self).call == false }
</code></li>
                
                <li class="post-context-line"><code>        block ? block[self, values] : yield(self, values)
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = original if original
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="941"
                  class="pre-context" id="pre-21"
                  onclick="toggle(21);">
                
                <li class="pre-context-line"><code>      base.filters[type].each { |args| process_route(*args) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block = nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
              </ol>
              

              <ol start="948" class="context" id="21"
                  onclick="toggle(21);">
                <li class="context-line" id="context-21"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|</code></li>
              </ol>

              
              <ol start="949" class="post-context"
                  id="post-21" onclick="toggle(21);">
                
                <li class="post-context-line"><code>            env[&#x27;sinatra.route&#x27;] = block.instance_variable_get(:@route_name)
</code></li>
                
                <li class="post-context-line"><code>            route_eval { block[*args] }
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="940"
                  class="pre-context" id="pre-22"
                  onclick="toggle(22);">
                
                <li class="pre-context-line"><code>      filter! type, base.superclass if base.superclass.respond_to?(:filters)
</code></li>
                
                <li class="pre-context-line"><code>      base.filters[type].each { |args| process_route(*args) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block = nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
              </ol>
              

              <ol start="947" class="context" id="22"
                  onclick="toggle(22);">
                <li class="context-line" id="context-22"><code>        routes.each do |pattern, keys, conditions, block|</code></li>
              </ol>

              
              <ol start="948" class="post-context"
                  id="post-22" onclick="toggle(22);">
                
                <li class="post-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
                <li class="post-context-line"><code>            env[&#x27;sinatra.route&#x27;] = block.instance_variable_get(:@route_name)
</code></li>
                
                <li class="post-context-line"><code>            route_eval { block[*args] }
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="940"
                  class="pre-context" id="pre-23"
                  onclick="toggle(23);">
                
                <li class="pre-context-line"><code>      filter! type, base.superclass if base.superclass.respond_to?(:filters)
</code></li>
                
                <li class="pre-context-line"><code>      base.filters[type].each { |args| process_route(*args) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block = nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
              </ol>
              

              <ol start="947" class="context" id="23"
                  onclick="toggle(23);">
                <li class="context-line" id="context-23"><code>        routes.each do |pattern, keys, conditions, block|</code></li>
              </ol>

              
              <ol start="948" class="post-context"
                  id="post-23" onclick="toggle(23);">
                
                <li class="post-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do |*args|
</code></li>
                
                <li class="post-context-line"><code>            env[&#x27;sinatra.route&#x27;] = block.instance_variable_get(:@route_name)
</code></li>
                
                <li class="post-context-line"><code>            route_eval { block[*args] }
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in dispatch!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1052"
                  class="pre-context" id="pre-24"
                  onclick="toggle(24);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Dispatch a request with error handling.
</code></li>
                
                <li class="pre-context-line"><code>    def dispatch!
</code></li>
                
                <li class="pre-context-line"><code>      invoke do
</code></li>
                
                <li class="pre-context-line"><code>        static! if settings.static? &amp;&amp; (request.get? || request.head?)
</code></li>
                
                <li class="pre-context-line"><code>        filter! :before
</code></li>
                
              </ol>
              

              <ol start="1059" class="context" id="24"
                  onclick="toggle(24);">
                <li class="context-line" id="context-24"><code>        route!</code></li>
              </ol>

              
              <ol start="1060" class="post-context"
                  id="post-24" onclick="toggle(24);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    rescue ::Exception =&gt; boom
</code></li>
                
                <li class="post-context-line"><code>      invoke { handle_exception!(boom) }
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      begin
</code></li>
                
                <li class="post-context-line"><code>        filter! :after unless env[&#x27;sinatra.static_file&#x27;]
</code></li>
                
                <li class="post-context-line"><code>      rescue ::Exception =&gt; boom
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in invoke</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1034"
                  class="pre-context" id="pre-25"
                  onclick="toggle(25);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="1041" class="context" id="25"
                  onclick="toggle(25);">
                <li class="context-line" id="context-25"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="1042" class="post-context"
                  id="post-25" onclick="toggle(25);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        res = res.dup
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>catch</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1034"
                  class="pre-context" id="pre-26"
                  onclick="toggle(26);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="1041" class="context" id="26"
                  onclick="toggle(26);">
                <li class="context-line" id="context-26"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="1042" class="post-context"
                  id="post-26" onclick="toggle(26);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        res = res.dup
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>invoke</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1034"
                  class="pre-context" id="pre-27"
                  onclick="toggle(27);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="1041" class="context" id="27"
                  onclick="toggle(27);">
                <li class="context-line" id="context-27"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="1042" class="post-context"
                  id="post-27" onclick="toggle(27);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        res = res.dup
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>dispatch!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1049"
                  class="pre-context" id="pre-28"
                  onclick="toggle(28);">
                
                <li class="pre-context-line"><code>        body res
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      nil # avoid double setting the same response tuple twice
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Dispatch a request with error handling.
</code></li>
                
                <li class="pre-context-line"><code>    def dispatch!
</code></li>
                
              </ol>
              

              <ol start="1056" class="context" id="28"
                  onclick="toggle(28);">
                <li class="context-line" id="context-28"><code>      invoke do</code></li>
              </ol>

              
              <ol start="1057" class="post-context"
                  id="post-28" onclick="toggle(28);">
                
                <li class="post-context-line"><code>        static! if settings.static? &amp;&amp; (request.get? || request.head?)
</code></li>
                
                <li class="post-context-line"><code>        filter! :before
</code></li>
                
                <li class="post-context-line"><code>        route!
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    rescue ::Exception =&gt; boom
</code></li>
                
                <li class="post-context-line"><code>      invoke { handle_exception!(boom) }
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in call!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="875"
                  class="pre-context" id="pre-29"
                  onclick="toggle(29);">
                
                <li class="pre-context-line"><code>      @request  = Request.new(env)
</code></li>
                
                <li class="pre-context-line"><code>      @response = Response.new
</code></li>
                
                <li class="pre-context-line"><code>      @params   = indifferent_params(@request.params)
</code></li>
                
                <li class="pre-context-line"><code>      template_cache.clear if settings.reload_templates
</code></li>
                
                <li class="pre-context-line"><code>      force_encoding(@params)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @response[&#x27;Content-Type&#x27;] = nil
</code></li>
                
              </ol>
              

              <ol start="882" class="context" id="29"
                  onclick="toggle(29);">
                <li class="context-line" id="context-29"><code>      invoke { dispatch! }</code></li>
              </ol>

              
              <ol start="883" class="post-context"
                  id="post-29" onclick="toggle(29);">
                
                <li class="post-context-line"><code>      invoke { error_block!(response.status) } unless @env[&#x27;sinatra.error&#x27;]
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      unless @response[&#x27;Content-Type&#x27;]
</code></li>
                
                <li class="post-context-line"><code>        if Array === body and body[0].respond_to? :content_type
</code></li>
                
                <li class="post-context-line"><code>          content_type body[0].content_type
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          content_type :html
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in invoke</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1034"
                  class="pre-context" id="pre-30"
                  onclick="toggle(30);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="1041" class="context" id="30"
                  onclick="toggle(30);">
                <li class="context-line" id="context-30"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="1042" class="post-context"
                  id="post-30" onclick="toggle(30);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        res = res.dup
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>catch</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1034"
                  class="pre-context" id="pre-31"
                  onclick="toggle(31);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="1041" class="context" id="31"
                  onclick="toggle(31);">
                <li class="context-line" id="context-31"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="1042" class="post-context"
                  id="post-31" onclick="toggle(31);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        res = res.dup
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>invoke</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1034"
                  class="pre-context" id="pre-32"
                  onclick="toggle(32);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke
</code></li>
                
              </ol>
              

              <ol start="1041" class="context" id="32"
                  onclick="toggle(32);">
                <li class="context-line" id="context-32"><code>      res = catch(:halt) { yield }</code></li>
              </ol>

              
              <ol start="1042" class="post-context"
                  id="post-32" onclick="toggle(32);">
                
                <li class="post-context-line"><code>      res = [res] if Fixnum === res or String === res
</code></li>
                
                <li class="post-context-line"><code>      if Array === res and Fixnum === res.first
</code></li>
                
                <li class="post-context-line"><code>        res = res.dup
</code></li>
                
                <li class="post-context-line"><code>        status(res.shift)
</code></li>
                
                <li class="post-context-line"><code>        body(res.pop)
</code></li>
                
                <li class="post-context-line"><code>        headers(*res)
</code></li>
                
                <li class="post-context-line"><code>      elsif res.respond_to? :each
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="875"
                  class="pre-context" id="pre-33"
                  onclick="toggle(33);">
                
                <li class="pre-context-line"><code>      @request  = Request.new(env)
</code></li>
                
                <li class="pre-context-line"><code>      @response = Response.new
</code></li>
                
                <li class="pre-context-line"><code>      @params   = indifferent_params(@request.params)
</code></li>
                
                <li class="pre-context-line"><code>      template_cache.clear if settings.reload_templates
</code></li>
                
                <li class="pre-context-line"><code>      force_encoding(@params)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @response[&#x27;Content-Type&#x27;] = nil
</code></li>
                
              </ol>
              

              <ol start="882" class="context" id="33"
                  onclick="toggle(33);">
                <li class="context-line" id="context-33"><code>      invoke { dispatch! }</code></li>
              </ol>

              
              <ol start="883" class="post-context"
                  id="post-33" onclick="toggle(33);">
                
                <li class="post-context-line"><code>      invoke { error_block!(response.status) } unless @env[&#x27;sinatra.error&#x27;]
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      unless @response[&#x27;Content-Type&#x27;]
</code></li>
                
                <li class="post-context-line"><code>        if Array === body and body[0].respond_to? :content_type
</code></li>
                
                <li class="post-context-line"><code>          content_type body[0].content_type
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          content_type :html
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="863"
                  class="pre-context" id="pre-34"
                  onclick="toggle(34);">
                
                <li class="pre-context-line"><code>      @app = app
</code></li>
                
                <li class="pre-context-line"><code>      @template_cache = Tilt::Cache.new
</code></li>
                
                <li class="pre-context-line"><code>      yield self if block_given?
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Rack call interface.
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="870" class="context" id="34"
                  onclick="toggle(34);">
                <li class="context-line" id="context-34"><code>      dup.call!(env)</code></li>
              </ol>

              
              <ol start="871" class="post-context"
                  id="post-34" onclick="toggle(34);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def call!(env) # :nodoc:
</code></li>
                
                <li class="post-context-line"><code>      @env      = env
</code></li>
                
                <li class="post-context-line"><code>      @request  = Request.new(env)
</code></li>
                
                <li class="post-context-line"><code>      @response = Response.new
</code></li>
                
                <li class="post-context-line"><code>      @params   = indifferent_params(@request.params)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-1.5.2&#x2F;lib&#x2F;rack&#x2F;logger.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="8"
                  class="pre-context" id="pre-35"
                  onclick="toggle(35);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
                <li class="pre-context-line"><code>      logger = ::Logger.new(env[&#x27;rack.errors&#x27;])
</code></li>
                
                <li class="pre-context-line"><code>      logger.level = @level
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      env[&#x27;rack.logger&#x27;] = logger
</code></li>
                
              </ol>
              

              <ol start="15" class="context" id="35"
                  onclick="toggle(35);">
                <li class="context-line" id="context-35"><code>      @app.call(env)</code></li>
              </ol>

              
              <ol start="16" class="post-context"
                  id="post-35" onclick="toggle(35);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-protection-1.5.0&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;xss_header.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="11"
                  class="pre-context" id="pre-36"
                  onclick="toggle(36);">
                
                <li class="pre-context-line"><code>    #
</code></li>
                
                <li class="pre-context-line"><code>    # Options:
</code></li>
                
                <li class="pre-context-line"><code>    # xss_mode:: How the browser should prevent the attack (default: :block)
</code></li>
                
                <li class="pre-context-line"><code>    class XSSHeader &lt; Base
</code></li>
                
                <li class="pre-context-line"><code>      default_options :xss_mode =&gt; :block, :nosniff =&gt; true
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="18" class="context" id="36"
                  onclick="toggle(36);">
                <li class="context-line" id="context-36"><code>        status, headers, body = @app.call(env)</code></li>
              </ol>

              
              <ol start="19" class="post-context"
                  id="post-36" onclick="toggle(36);">
                
                <li class="post-context-line"><code>        headers[&#x27;X-XSS-Protection&#x27;]       ||= &quot;1; mode=#{options[:xss_mode]}&quot; if html? headers
</code></li>
                
                <li class="post-context-line"><code>        headers[&#x27;X-Content-Type-Options&#x27;] ||= &#x27;nosniff&#x27;                       if options[:nosniff]
</code></li>
                
                <li class="post-context-line"><code>        [status, headers, body]
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-protection-1.5.0&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;path_traversal.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="9"
                  class="pre-context" id="pre-37"
                  onclick="toggle(37);">
                
                <li class="pre-context-line"><code>    #
</code></li>
                
                <li class="pre-context-line"><code>    # Unescapes &#x27;&#x2F;&#x27; and &#x27;.&#x27;, expands +path_info+.
</code></li>
                
                <li class="pre-context-line"><code>    # Thus &lt;tt&gt;GET &#x2F;foo&#x2F;%2e%2e%2fbar&lt;&#x2F;tt&gt; becomes &lt;tt&gt;GET &#x2F;bar&lt;&#x2F;tt&gt;.
</code></li>
                
                <li class="pre-context-line"><code>    class PathTraversal &lt; Base
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        path_was         = env[&quot;PATH_INFO&quot;]
</code></li>
                
                <li class="pre-context-line"><code>        env[&quot;PATH_INFO&quot;] = cleanup path_was if path_was &amp;&amp; !path_was.empty?
</code></li>
                
              </ol>
              

              <ol start="16" class="context" id="37"
                  onclick="toggle(37);">
                <li class="context-line" id="context-37"><code>        app.call env</code></li>
              </ol>

              
              <ol start="17" class="post-context"
                  id="post-37" onclick="toggle(37);">
                
                <li class="post-context-line"><code>      ensure
</code></li>
                
                <li class="post-context-line"><code>        env[&quot;PATH_INFO&quot;] = path_was
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def cleanup(path)
</code></li>
                
                <li class="post-context-line"><code>        parts     = []
</code></li>
                
                <li class="post-context-line"><code>        unescaped = path.gsub(&#x27;%2e&#x27;, &#x27;.&#x27;).gsub(&#x27;%2f&#x27;, &#x27;&#x2F;&#x27;)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-protection-1.5.0&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;json_csrf.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="11"
                  class="pre-context" id="pre-38"
                  onclick="toggle(38);">
                
                <li class="pre-context-line"><code>    # Array prototype has been patched to track data. Checks the referrer
</code></li>
                
                <li class="pre-context-line"><code>    # even on GET requests if the content type is JSON.
</code></li>
                
                <li class="pre-context-line"><code>    class JsonCsrf &lt; Base
</code></li>
                
                <li class="pre-context-line"><code>      default_reaction :deny
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        request               = Request.new(env)
</code></li>
                
              </ol>
              

              <ol start="18" class="context" id="38"
                  onclick="toggle(38);">
                <li class="context-line" id="context-38"><code>        status, headers, body = app.call(env)</code></li>
              </ol>

              
              <ol start="19" class="post-context"
                  id="post-38" onclick="toggle(38);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        if has_vector? request, headers
</code></li>
                
                <li class="post-context-line"><code>          warn env, &quot;attack prevented by #{self.class}&quot;
</code></li>
                
                <li class="post-context-line"><code>          react(env)
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          [status, headers, body]
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-protection-1.5.0&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="42"
                  class="pre-context" id="pre-39"
                  onclick="toggle(39);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        unless accepts? env
</code></li>
                
                <li class="pre-context-line"><code>          warn env, &quot;attack prevented by #{self.class}&quot;
</code></li>
                
                <li class="pre-context-line"><code>          result = react env
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
              </ol>
              

              <ol start="49" class="context" id="39"
                  onclick="toggle(39);">
                <li class="context-line" id="context-39"><code>        result or app.call(env)</code></li>
              </ol>

              
              <ol start="50" class="post-context"
                  id="post-39" onclick="toggle(39);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def react(env)
</code></li>
                
                <li class="post-context-line"><code>        result = send(options[:reaction], env)
</code></li>
                
                <li class="post-context-line"><code>        result if Array === result and result.size == 3
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-protection-1.5.0&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="42"
                  class="pre-context" id="pre-40"
                  onclick="toggle(40);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        unless accepts? env
</code></li>
                
                <li class="pre-context-line"><code>          warn env, &quot;attack prevented by #{self.class}&quot;
</code></li>
                
                <li class="pre-context-line"><code>          result = react env
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
              </ol>
              

              <ol start="49" class="context" id="40"
                  onclick="toggle(40);">
                <li class="context-line" id="context-40"><code>        result or app.call(env)</code></li>
              </ol>

              
              <ol start="50" class="post-context"
                  id="post-40" onclick="toggle(40);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def react(env)
</code></li>
                
                <li class="post-context-line"><code>        result = send(options[:reaction], env)
</code></li>
                
                <li class="post-context-line"><code>        result if Array === result and result.size == 3
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-protection-1.5.0&#x2F;lib&#x2F;rack&#x2F;protection&#x2F;frame_options.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="24"
                  class="pre-context" id="pre-41"
                  onclick="toggle(41);">
                
                <li class="pre-context-line"><code>          frame_options = options[:frame_options]
</code></li>
                
                <li class="pre-context-line"><code>          frame_options = options[:frame_options].to_s.upcase unless frame_options.respond_to? :to_str
</code></li>
                
                <li class="pre-context-line"><code>          frame_options.to_str
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="31" class="context" id="41"
                  onclick="toggle(41);">
                <li class="context-line" id="context-41"><code>        status, headers, body        = @app.call(env)</code></li>
              </ol>

              
              <ol start="32" class="post-context"
                  id="post-41" onclick="toggle(41);">
                
                <li class="post-context-line"><code>        headers[&#x27;X-Frame-Options&#x27;] ||= frame_options if html? headers
</code></li>
                
                <li class="post-context-line"><code>        [status, headers, body]
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-1.5.2&#x2F;lib&#x2F;rack&#x2F;logger.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="8"
                  class="pre-context" id="pre-42"
                  onclick="toggle(42);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
                <li class="pre-context-line"><code>      logger = ::Logger.new(env[&#x27;rack.errors&#x27;])
</code></li>
                
                <li class="pre-context-line"><code>      logger.level = @level
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      env[&#x27;rack.logger&#x27;] = logger
</code></li>
                
              </ol>
              

              <ol start="15" class="context" id="42"
                  onclick="toggle(42);">
                <li class="context-line" id="context-42"><code>      @app.call(env)</code></li>
              </ol>

              
              <ol start="16" class="post-context"
                  id="post-42" onclick="toggle(42);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-1.5.2&#x2F;lib&#x2F;rack&#x2F;commonlogger.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="26"
                  class="pre-context" id="pre-43"
                  onclick="toggle(43);">
                
                <li class="pre-context-line"><code>    def initialize(app, logger=nil)
</code></li>
                
                <li class="pre-context-line"><code>      @app = app
</code></li>
                
                <li class="pre-context-line"><code>      @logger = logger
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
                <li class="pre-context-line"><code>      began_at = Time.now
</code></li>
                
              </ol>
              

              <ol start="33" class="context" id="43"
                  onclick="toggle(43);">
                <li class="context-line" id="context-43"><code>      status, header, body = @app.call(env)</code></li>
              </ol>

              
              <ol start="34" class="post-context"
                  id="post-43" onclick="toggle(43);">
                
                <li class="post-context-line"><code>      header = Utils::HeaderHash.new(header)
</code></li>
                
                <li class="post-context-line"><code>      body = BodyProxy.new(body) { log(env, status, header, began_at) }
</code></li>
                
                <li class="post-context-line"><code>      [status, header, body]
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    private
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="205"
                  class="pre-context" id="pre-44"
                  onclick="toggle(44);">
                
                <li class="pre-context-line"><code>      env[&#x27;sinatra.commonlogger&#x27;] ? @app.call(env) : super
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    superclass.class_eval do
</code></li>
                
                <li class="pre-context-line"><code>      alias call_without_check call unless method_defined? :call_without_check
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
                <li class="pre-context-line"><code>        env[&#x27;sinatra.commonlogger&#x27;] = true
</code></li>
                
              </ol>
              

              <ol start="212" class="context" id="44"
                  onclick="toggle(44);">
                <li class="context-line" id="context-44"><code>        call_without_check(env)</code></li>
              </ol>

              
              <ol start="213" class="post-context"
                  id="post-44" onclick="toggle(44);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>  class NotFound &lt; NameError #:nodoc:
</code></li>
                
                <li class="post-context-line"><code>    def http_status; 404 end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="198"
                  class="pre-context" id="pre-45"
                  onclick="toggle(45);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>  # Behaves exactly like Rack::CommonLogger with the notable exception that it does nothing,
</code></li>
                
                <li class="pre-context-line"><code>  # if another CommonLogger is already in the middleware chain.
</code></li>
                
                <li class="pre-context-line"><code>  class CommonLogger &lt; Rack::CommonLogger
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="205" class="context" id="45"
                  onclick="toggle(45);">
                <li class="context-line" id="context-45"><code>      env[&#x27;sinatra.commonlogger&#x27;] ? @app.call(env) : super</code></li>
              </ol>

              
              <ol start="206" class="post-context"
                  id="post-45" onclick="toggle(45);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    superclass.class_eval do
</code></li>
                
                <li class="post-context-line"><code>      alias call_without_check call unless method_defined? :call_without_check
</code></li>
                
                <li class="post-context-line"><code>      def call(env)
</code></li>
                
                <li class="post-context-line"><code>        env[&#x27;sinatra.commonlogger&#x27;] = true
</code></li>
                
                <li class="post-context-line"><code>        call_without_check(env)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-1.5.2&#x2F;lib&#x2F;rack&#x2F;head.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="4"
                  class="pre-context" id="pre-46"
                  onclick="toggle(46);">
                
                <li class="pre-context-line"><code>  # Rack::Head returns an empty body for all HEAD requests. It leaves
</code></li>
                
                <li class="pre-context-line"><code>  # all other requests unchanged.
</code></li>
                
                <li class="pre-context-line"><code>  def initialize(app)
</code></li>
                
                <li class="pre-context-line"><code>    @app = app
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>  def call(env)
</code></li>
                
              </ol>
              

              <ol start="11" class="context" id="46"
                  onclick="toggle(46);">
                <li class="context-line" id="context-46"><code>    status, headers, body = @app.call(env)</code></li>
              </ol>

              
              <ol start="12" class="post-context"
                  id="post-46" onclick="toggle(46);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    if env[&quot;REQUEST_METHOD&quot;] == &quot;HEAD&quot;
</code></li>
                
                <li class="post-context-line"><code>      body.close if body.respond_to? :close
</code></li>
                
                <li class="post-context-line"><code>      [status, headers, []]
</code></li>
                
                <li class="post-context-line"><code>    else
</code></li>
                
                <li class="post-context-line"><code>      [status, headers, body]
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-1.5.2&#x2F;lib&#x2F;rack&#x2F;methodoverride.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="14"
                  class="pre-context" id="pre-47"
                  onclick="toggle(47);">
                
                <li class="pre-context-line"><code>        method = method_override(env)
</code></li>
                
                <li class="pre-context-line"><code>        if HTTP_METHODS.include?(method)
</code></li>
                
                <li class="pre-context-line"><code>          env[&quot;rack.methodoverride.original_method&quot;] = env[&quot;REQUEST_METHOD&quot;]
</code></li>
                
                <li class="pre-context-line"><code>          env[&quot;REQUEST_METHOD&quot;] = method
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="21" class="context" id="47"
                  onclick="toggle(47);">
                <li class="context-line" id="context-47"><code>      @app.call(env)</code></li>
              </ol>

              
              <ol start="22" class="post-context"
                  id="post-47" onclick="toggle(47);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def method_override(env)
</code></li>
                
                <li class="post-context-line"><code>      req = Request.new(env)
</code></li>
                
                <li class="post-context-line"><code>      method = req.POST[METHOD_OVERRIDE_PARAM_KEY] ||
</code></li>
                
                <li class="post-context-line"><code>        env[HTTP_METHOD_OVERRIDE_HEADER]
</code></li>
                
                <li class="post-context-line"><code>      method.to_s.upcase
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;showexceptions.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="14"
                  class="pre-context" id="pre-48"
                  onclick="toggle(48);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def initialize(app)
</code></li>
                
                <li class="pre-context-line"><code>      @app      = app
</code></li>
                
                <li class="pre-context-line"><code>      @template = ERB.new(TEMPLATE)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="21" class="context" id="48"
                  onclick="toggle(48);">
                <li class="context-line" id="context-48"><code>      @app.call(env)</code></li>
              </ol>

              
              <ol start="22" class="post-context"
                  id="post-48" onclick="toggle(48);">
                
                <li class="post-context-line"><code>    rescue Exception =&gt; e
</code></li>
                
                <li class="post-context-line"><code>      errors, env[&quot;rack.errors&quot;] = env[&quot;rack.errors&quot;], @@eats_errors
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      if prefers_plain_text?(env)
</code></li>
                
                <li class="post-context-line"><code>        content_type = &quot;text&#x2F;plain&quot;
</code></li>
                
                <li class="post-context-line"><code>        body = [dump_exception(e)]
</code></li>
                
                <li class="post-context-line"><code>      else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="168"
                  class="pre-context" id="pre-49"
                  onclick="toggle(49);">
                
                <li class="pre-context-line"><code>  # Some Rack handlers (Thin, Rainbows!) implement an extended body object protocol, however,
</code></li>
                
                <li class="pre-context-line"><code>  # some middleware (namely Rack::Lint) will break it by not mirroring the methods in question.
</code></li>
                
                <li class="pre-context-line"><code>  # This middleware will detect an extended body object and will make sure it reaches the
</code></li>
                
                <li class="pre-context-line"><code>  # handler directly. We do this here, so our middleware and middleware set up by the app will
</code></li>
                
                <li class="pre-context-line"><code>  # still be able to run.
</code></li>
                
                <li class="pre-context-line"><code>  class ExtendedRack &lt; Struct.new(:app)
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="175" class="context" id="49"
                  onclick="toggle(49);">
                <li class="context-line" id="context-49"><code>      result, callback = app.call(env), env[&#x27;async.callback&#x27;]</code></li>
              </ol>

              
              <ol start="176" class="post-context"
                  id="post-49" onclick="toggle(49);">
                
                <li class="post-context-line"><code>      return result unless callback and async?(*result)
</code></li>
                
                <li class="post-context-line"><code>      after_response { callback.call result }
</code></li>
                
                <li class="post-context-line"><code>      setup_close(env, *result)
</code></li>
                
                <li class="post-context-line"><code>      throw :async
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    private
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1942"
                  class="pre-context" id="pre-50"
                  onclick="toggle(50);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def helpers
</code></li>
                
                <li class="pre-context-line"><code>      @instance
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="1949" class="context" id="50"
                  onclick="toggle(50);">
                <li class="context-line" id="context-50"><code>      @stack.call(env)</code></li>
              </ol>

              
              <ol start="1950" class="post-context"
                  id="post-50" onclick="toggle(50);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def inspect
</code></li>
                
                <li class="post-context-line"><code>      &quot;#&lt;#{@instance.class} app_file=#{settings.app_file.inspect}&gt;&quot;
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1442"
                  class="pre-context" id="pre-51"
                  onclick="toggle(51);">
                
                <li class="pre-context-line"><code>        setup_default_middleware builder
</code></li>
                
                <li class="pre-context-line"><code>        setup_middleware builder
</code></li>
                
                <li class="pre-context-line"><code>        builder.run app
</code></li>
                
                <li class="pre-context-line"><code>        builder
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="1449" class="context" id="51"
                  onclick="toggle(51);">
                <li class="context-line" id="context-51"><code>        synchronize { prototype.call(env) }</code></li>
              </ol>

              
              <ol start="1450" class="post-context"
                  id="post-51" onclick="toggle(51);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Like Kernel#caller but excluding certain magic entries and without
</code></li>
                
                <li class="post-context-line"><code>      # line &#x2F; method information; the resulting array contains filenames only.
</code></li>
                
                <li class="post-context-line"><code>      def caller_files
</code></li>
                
                <li class="post-context-line"><code>        cleaned_caller(1).flatten
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>synchronize</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1719"
                  class="pre-context" id="pre-52"
                  onclick="toggle(52);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @@mutex = Mutex.new
</code></li>
                
                <li class="pre-context-line"><code>      def synchronize(&amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        if lock?
</code></li>
                
                <li class="pre-context-line"><code>          @@mutex.synchronize(&amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="1726" class="context" id="52"
                  onclick="toggle(52);">
                <li class="context-line" id="context-52"><code>          yield</code></li>
              </ol>

              
              <ol start="1727" class="post-context"
                  id="post-52" onclick="toggle(52);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # used for deprecation warnings
</code></li>
                
                <li class="post-context-line"><code>      def warn(message)
</code></li>
                
                <li class="post-context-line"><code>        super message + &quot;\n\tfrom #{cleaned_caller.first.join(&#x27;:&#x27;)}&quot;
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-1.4.3&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1442"
                  class="pre-context" id="pre-53"
                  onclick="toggle(53);">
                
                <li class="pre-context-line"><code>        setup_default_middleware builder
</code></li>
                
                <li class="pre-context-line"><code>        setup_middleware builder
</code></li>
                
                <li class="pre-context-line"><code>        builder.run app
</code></li>
                
                <li class="pre-context-line"><code>        builder
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="1449" class="context" id="53"
                  onclick="toggle(53);">
                <li class="context-line" id="context-53"><code>        synchronize { prototype.call(env) }</code></li>
              </ol>

              
              <ol start="1450" class="post-context"
                  id="post-53" onclick="toggle(53);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Like Kernel#caller but excluding certain magic entries and without
</code></li>
                
                <li class="post-context-line"><code>      # line &#x2F; method information; the resulting array contains filenames only.
</code></li>
                
                <li class="post-context-line"><code>      def caller_files
</code></li>
                
                <li class="post-context-line"><code>        cleaned_caller(1).flatten
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-test-0.6.2&#x2F;lib&#x2F;rack&#x2F;mock_session.rb</code> in
                <code><strong>request</strong></code>
            </li>

            <li class="code system">
              
              <ol start="23"
                  class="pre-context" id="pre-54"
                  onclick="toggle(54);">
                
                <li class="pre-context-line"><code>    def set_cookie(cookie, uri = nil)
</code></li>
                
                <li class="pre-context-line"><code>      cookie_jar.merge(cookie, uri)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def request(uri, env)
</code></li>
                
                <li class="pre-context-line"><code>      env[&quot;HTTP_COOKIE&quot;] ||= cookie_jar.for(uri)
</code></li>
                
                <li class="pre-context-line"><code>      @last_request = Rack::Request.new(env)
</code></li>
                
              </ol>
              

              <ol start="30" class="context" id="54"
                  onclick="toggle(54);">
                <li class="context-line" id="context-54"><code>      status, headers, body = @app.call(@last_request.env)</code></li>
              </ol>

              
              <ol start="31" class="post-context"
                  id="post-54" onclick="toggle(54);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      @last_response = MockResponse.new(status, headers, body, env[&quot;rack.errors&quot;].flush)
</code></li>
                
                <li class="post-context-line"><code>      body.close if body.respond_to?(:close)
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      cookie_jar.merge(last_response.headers[&quot;Set-Cookie&quot;], uri)
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      @after_request.each { |hook| hook.call }
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-test-0.6.2&#x2F;lib&#x2F;rack&#x2F;test.rb</code> in
                <code><strong>process_request</strong></code>
            </li>

            <li class="code system">
              
              <ol start="223"
                  class="pre-context" id="pre-55"
                  onclick="toggle(55);">
                
                <li class="pre-context-line"><code>        Rack::MockRequest.env_for(uri.to_s, env)
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def process_request(uri, env)
</code></li>
                
                <li class="pre-context-line"><code>        uri = URI.parse(uri)
</code></li>
                
                <li class="pre-context-line"><code>        uri.host ||= @default_host
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="230" class="context" id="55"
                  onclick="toggle(55);">
                <li class="context-line" id="context-55"><code>        @rack_mock_session.request(uri, env)</code></li>
              </ol>

              
              <ol start="231" class="post-context"
                  id="post-55" onclick="toggle(55);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        if retry_with_digest_auth?(env)
</code></li>
                
                <li class="post-context-line"><code>          auth_env = env.merge({
</code></li>
                
                <li class="post-context-line"><code>            &quot;HTTP_AUTHORIZATION&quot;          =&gt; digest_auth_header,
</code></li>
                
                <li class="post-context-line"><code>            &quot;rack-test.digest_auth_retry&quot; =&gt; true
</code></li>
                
                <li class="post-context-line"><code>          })
</code></li>
                
                <li class="post-context-line"><code>          auth_env.delete(&#x27;rack.request&#x27;)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;rack-test-0.6.2&#x2F;lib&#x2F;rack&#x2F;test.rb</code> in
                <code><strong>get</strong></code>
            </li>

            <li class="code system">
              
              <ol start="50"
                  class="pre-context" id="pre-56"
                  onclick="toggle(56);">
                
                <li class="pre-context-line"><code>      # the app&#x27;s response in #last_response. Yield #last_response to a block
</code></li>
                
                <li class="pre-context-line"><code>      # if given.
</code></li>
                
                <li class="pre-context-line"><code>      #
</code></li>
                
                <li class="pre-context-line"><code>      # Example:
</code></li>
                
                <li class="pre-context-line"><code>      #   get &quot;&#x2F;&quot;
</code></li>
                
                <li class="pre-context-line"><code>      def get(uri, params = {}, env = {}, &amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        env = env_for(uri, env.merge(:method =&gt; &quot;GET&quot;, :params =&gt; params))
</code></li>
                
              </ol>
              

              <ol start="57" class="context" id="56"
                  onclick="toggle(56);">
                <li class="context-line" id="context-56"><code>        process_request(uri, env, &amp;block)</code></li>
              </ol>

              
              <ol start="58" class="post-context"
                  id="post-56" onclick="toggle(56);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Issue a POST request for the given URI. See #get
</code></li>
                
                <li class="post-context-line"><code>      #
</code></li>
                
                <li class="post-context-line"><code>      # Example:
</code></li>
                
                <li class="post-context-line"><code>      #   post &quot;&#x2F;signup&quot;, &quot;name&quot; =&gt; &quot;Bryan&quot;
</code></li>
                
                <li class="post-context-line"><code>      def post(uri, params = {}, env = {}, &amp;block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;builder.rb</code> in
                <code><strong>build_get</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="6"
                  class="pre-context" id="pre-57"
                  onclick="toggle(57);">
                
                <li class="pre-context-line"><code>        files.each { |path, local| build_file!(path, local, &amp;blk) }
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      private
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def build_get(path, &amp;blk)
</code></li>
                
                <li class="pre-context-line"><code>        @session ||= Rack::Test::Session.new app
</code></li>
                
              </ol>
              

              <ol start="13" class="context" id="57"
                  onclick="toggle(57);">
                <li class="context-line" id="context-57"><code>        @session.get(path)</code></li>
              </ol>

              
              <ol start="14" class="post-context"
                  id="post-57" onclick="toggle(57);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def build_package!(pack, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>        response = build_get(pack.path)
</code></li>
                
                <li class="post-context-line"><code>        build_write(pack.path, response, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>        build_write(pack.production_path, response, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;builder.rb</code> in
                <code><strong>build_package!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="10"
                  class="pre-context" id="pre-58"
                  onclick="toggle(58);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def build_get(path, &amp;blk)
</code></li>
                
                <li class="pre-context-line"><code>        @session ||= Rack::Test::Session.new app
</code></li>
                
                <li class="pre-context-line"><code>        @session.get(path)
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def build_package!(pack, &amp;blk)
</code></li>
                
              </ol>
              

              <ol start="17" class="context" id="58"
                  onclick="toggle(58);">
                <li class="context-line" id="context-58"><code>        response = build_get(pack.path)</code></li>
              </ol>

              
              <ol start="18" class="post-context"
                  id="post-58" onclick="toggle(58);">
                
                <li class="post-context-line"><code>        build_write(pack.path, response, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>        build_write(pack.production_path, response, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def build_file!(path, local, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>        response = build_get(path)
</code></li>
                
                <li class="post-context-line"><code>        build_write(path, response, &amp;blk)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;builder.rb</code> in
                <code><strong>block in build!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1"
                  class="pre-context" id="pre-59"
                  onclick="toggle(59);">
                
                <li class="pre-context-line"><code>module Sinatra
</code></li>
                
                <li class="pre-context-line"><code>  module AssetPack
</code></li>
                
                <li class="pre-context-line"><code>    module Builder
</code></li>
                
                <li class="pre-context-line"><code>      def build!(&amp;blk)
</code></li>
                
              </ol>
              

              <ol start="5" class="context" id="59"
                  onclick="toggle(59);">
                <li class="context-line" id="context-59"><code>        packages.each { |_, pack| build_package!(pack, &amp;blk) }</code></li>
              </ol>

              
              <ol start="6" class="post-context"
                  id="post-59" onclick="toggle(59);">
                
                <li class="post-context-line"><code>        files.each { |path, local| build_file!(path, local, &amp;blk) }
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      private
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def build_get(path, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>        @session ||= Rack::Test::Session.new app
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;builder.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1"
                  class="pre-context" id="pre-60"
                  onclick="toggle(60);">
                
                <li class="pre-context-line"><code>module Sinatra
</code></li>
                
                <li class="pre-context-line"><code>  module AssetPack
</code></li>
                
                <li class="pre-context-line"><code>    module Builder
</code></li>
                
                <li class="pre-context-line"><code>      def build!(&amp;blk)
</code></li>
                
              </ol>
              

              <ol start="5" class="context" id="60"
                  onclick="toggle(60);">
                <li class="context-line" id="context-60"><code>        packages.each { |_, pack| build_package!(pack, &amp;blk) }</code></li>
              </ol>

              
              <ol start="6" class="post-context"
                  id="post-60" onclick="toggle(60);">
                
                <li class="post-context-line"><code>        files.each { |path, local| build_file!(path, local, &amp;blk) }
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      private
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def build_get(path, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>        @session ||= Rack::Test::Session.new app
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;builder.rb</code> in
                <code><strong>build!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1"
                  class="pre-context" id="pre-61"
                  onclick="toggle(61);">
                
                <li class="pre-context-line"><code>module Sinatra
</code></li>
                
                <li class="pre-context-line"><code>  module AssetPack
</code></li>
                
                <li class="pre-context-line"><code>    module Builder
</code></li>
                
                <li class="pre-context-line"><code>      def build!(&amp;blk)
</code></li>
                
              </ol>
              

              <ol start="5" class="context" id="61"
                  onclick="toggle(61);">
                <li class="context-line" id="context-61"><code>        packages.each { |_, pack| build_package!(pack, &amp;blk) }</code></li>
              </ol>

              
              <ol start="6" class="post-context"
                  id="post-61" onclick="toggle(61);">
                
                <li class="post-context-line"><code>        files.each { |path, local| build_file!(path, local, &amp;blk) }
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      private
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def build_get(path, &amp;blk)
</code></li>
                
                <li class="post-context-line"><code>        @session ||= Rack::Test::Session.new app
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;gems&#x2F;sinatra-assetpack-0.3.1&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;rake.rb</code> in
                <code><strong>block (2 levels) in &lt;top (required)&gt;</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="18"
                  class="pre-context" id="pre-62"
                  onclick="toggle(62);">
                
                <li class="pre-context-line"><code>  require File.expand_path(APP_FILE, Dir.pwd)
</code></li>
                
                <li class="pre-context-line"><code>  class_from_string(APP_CLASS)
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>namespace :assetpack do
</code></li>
                
                <li class="pre-context-line"><code>  desc &quot;Build assets&quot;
</code></li>
                
                <li class="pre-context-line"><code>  task :build do
</code></li>
                
              </ol>
              

              <ol start="25" class="context" id="62"
                  onclick="toggle(62);">
                <li class="context-line" id="context-62"><code>    app.assets.build! { |file|</code></li>
              </ol>

              
              <ol start="26" class="post-context"
                  id="post-62" onclick="toggle(62);">
                
                <li class="post-context-line"><code>      puts &quot;+ #{file.gsub(Dir.pwd, &#x27;&#x27;)}&quot;
</code></li>
                
                <li class="post-context-line"><code>    }
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code app">
              
              <ol start="229"
                  class="pre-context" id="pre-63"
                  onclick="toggle(63);">
                
                <li class="pre-context-line"><code>      application.trace &quot;** Execute #{name}&quot; if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
                <li class="pre-context-line"><code>      @actions.each do |act|
</code></li>
                
                <li class="pre-context-line"><code>        case act.arity
</code></li>
                
                <li class="pre-context-line"><code>        when 1
</code></li>
                
                <li class="pre-context-line"><code>          act.call(self)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="236" class="context" id="63"
                  onclick="toggle(63);">
                <li class="context-line" id="context-63"><code>          act.call(self, args)</code></li>
              </ol>

              
              <ol start="237" class="post-context"
                  id="post-63" onclick="toggle(63);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Is this task needed?
</code></li>
                
                <li class="post-context-line"><code>    def needed?
</code></li>
                
                <li class="post-context-line"><code>      true
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>block in execute</strong></code>
            </li>

            <li class="code app">
              
              <ol start="229"
                  class="pre-context" id="pre-64"
                  onclick="toggle(64);">
                
                <li class="pre-context-line"><code>      application.trace &quot;** Execute #{name}&quot; if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
                <li class="pre-context-line"><code>      @actions.each do |act|
</code></li>
                
                <li class="pre-context-line"><code>        case act.arity
</code></li>
                
                <li class="pre-context-line"><code>        when 1
</code></li>
                
                <li class="pre-context-line"><code>          act.call(self)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="236" class="context" id="64"
                  onclick="toggle(64);">
                <li class="context-line" id="context-64"><code>          act.call(self, args)</code></li>
              </ol>

              
              <ol start="237" class="post-context"
                  id="post-64" onclick="toggle(64);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Is this task needed?
</code></li>
                
                <li class="post-context-line"><code>    def needed?
</code></li>
                
                <li class="post-context-line"><code>      true
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code app">
              
              <ol start="224"
                  class="pre-context" id="pre-65"
                  onclick="toggle(65);">
                
                <li class="pre-context-line"><code>      args ||= EMPTY_TASK_ARGS
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.dryrun
</code></li>
                
                <li class="pre-context-line"><code>        application.trace &quot;** Execute (dry run) #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        return
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.trace &quot;** Execute #{name}&quot; if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
              </ol>
              

              <ol start="231" class="context" id="65"
                  onclick="toggle(65);">
                <li class="context-line" id="context-65"><code>      @actions.each do |act|</code></li>
              </ol>

              
              <ol start="232" class="post-context"
                  id="post-65" onclick="toggle(65);">
                
                <li class="post-context-line"><code>        case act.arity
</code></li>
                
                <li class="post-context-line"><code>        when 1
</code></li>
                
                <li class="post-context-line"><code>          act.call(self)
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          act.call(self, args)
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>execute</strong></code>
            </li>

            <li class="code app">
              
              <ol start="224"
                  class="pre-context" id="pre-66"
                  onclick="toggle(66);">
                
                <li class="pre-context-line"><code>      args ||= EMPTY_TASK_ARGS
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.dryrun
</code></li>
                
                <li class="pre-context-line"><code>        application.trace &quot;** Execute (dry run) #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        return
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.trace &quot;** Execute #{name}&quot; if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
              </ol>
              

              <ol start="231" class="context" id="66"
                  onclick="toggle(66);">
                <li class="context-line" id="context-66"><code>      @actions.each do |act|</code></li>
              </ol>

              
              <ol start="232" class="post-context"
                  id="post-66" onclick="toggle(66);">
                
                <li class="post-context-line"><code>        case act.arity
</code></li>
                
                <li class="post-context-line"><code>        when 1
</code></li>
                
                <li class="post-context-line"><code>          act.call(self)
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          act.call(self, args)
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>block in invoke_with_call_chain</strong></code>
            </li>

            <li class="code app">
              
              <ol start="168"
                  class="pre-context" id="pre-67"
                  onclick="toggle(67);">
                
                <li class="pre-context-line"><code>      @lock.synchronize do
</code></li>
                
                <li class="pre-context-line"><code>        if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>          application.trace &quot;** Invoke #{name} #{format_trace_flags}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>        return if @already_invoked
</code></li>
                
                <li class="pre-context-line"><code>        @already_invoked = true
</code></li>
                
                <li class="pre-context-line"><code>        invoke_prerequisites(task_args, new_chain)
</code></li>
                
              </ol>
              

              <ol start="175" class="context" id="67"
                  onclick="toggle(67);">
                <li class="context-line" id="context-67"><code>        execute(task_args) if needed?</code></li>
              </ol>

              
              <ol start="176" class="post-context"
                  id="post-67" onclick="toggle(67);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    rescue Exception =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>      add_chain_to(ex, new_chain)
</code></li>
                
                <li class="post-context-line"><code>      raise ex
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>    protected :invoke_with_call_chain
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;rubies&#x2F;ruby-2.0.0-p247&#x2F;lib&#x2F;ruby&#x2F;2.0.0&#x2F;monitor.rb</code> in
                <code><strong>mon_synchronize</strong></code>
            </li>

            <li class="code app">
              
              <ol start="204"
                  class="pre-context" id="pre-68"
                  onclick="toggle(68);">
                
                <li class="pre-context-line"><code>  # Enters exclusive section and executes the block.  Leaves the exclusive
</code></li>
                
                <li class="pre-context-line"><code>  # section automatically when the block exits.  See example under
</code></li>
                
                <li class="pre-context-line"><code>  # +MonitorMixin+.
</code></li>
                
                <li class="pre-context-line"><code>  #
</code></li>
                
                <li class="pre-context-line"><code>  def mon_synchronize
</code></li>
                
                <li class="pre-context-line"><code>    mon_enter
</code></li>
                
                <li class="pre-context-line"><code>    begin
</code></li>
                
              </ol>
              

              <ol start="211" class="context" id="68"
                  onclick="toggle(68);">
                <li class="context-line" id="context-68"><code>      yield</code></li>
              </ol>

              
              <ol start="212" class="post-context"
                  id="post-68" onclick="toggle(68);">
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      mon_exit
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>  alias synchronize mon_synchronize
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>  #
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>invoke_with_call_chain</strong></code>
            </li>

            <li class="code app">
              
              <ol start="161"
                  class="pre-context" id="pre-69"
                  onclick="toggle(69);">
                
                <li class="pre-context-line"><code>      invoke_with_call_chain(task_args, InvocationChain::EMPTY)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Same as invoke, but explicitly pass a call chain to detect
</code></li>
                
                <li class="pre-context-line"><code>    # circular dependencies.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_with_call_chain(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="pre-context-line"><code>      new_chain = InvocationChain.append(self, invocation_chain)
</code></li>
                
              </ol>
              

              <ol start="168" class="context" id="69"
                  onclick="toggle(69);">
                <li class="context-line" id="context-69"><code>      @lock.synchronize do</code></li>
              </ol>

              
              <ol start="169" class="post-context"
                  id="post-69" onclick="toggle(69);">
                
                <li class="post-context-line"><code>        if application.options.trace
</code></li>
                
                <li class="post-context-line"><code>          application.trace &quot;** Invoke #{name} #{format_trace_flags}&quot;
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>        return if @already_invoked
</code></li>
                
                <li class="post-context-line"><code>        @already_invoked = true
</code></li>
                
                <li class="post-context-line"><code>        invoke_prerequisites(task_args, new_chain)
</code></li>
                
                <li class="post-context-line"><code>        execute(task_args) if needed?
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>block in invoke_prerequisites</strong></code>
            </li>

            <li class="code app">
              
              <ol start="190"
                  class="pre-context" id="pre-70"
                  onclick="toggle(70);">
                
                <li class="pre-context-line"><code>    # Invoke all the prerequisites of a task.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_prerequisites(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.always_multitask
</code></li>
                
                <li class="pre-context-line"><code>        invoke_prerequisites_concurrently(task_args, invocation_chain)
</code></li>
                
                <li class="pre-context-line"><code>      else
</code></li>
                
                <li class="pre-context-line"><code>        prerequisite_tasks.each { |p|
</code></li>
                
                <li class="pre-context-line"><code>          prereq_args = task_args.new_scope(p.arg_names)
</code></li>
                
              </ol>
              

              <ol start="197" class="context" id="70"
                  onclick="toggle(70);">
                <li class="context-line" id="context-70"><code>          p.invoke_with_call_chain(prereq_args, invocation_chain)</code></li>
              </ol>

              
              <ol start="198" class="post-context"
                  id="post-70" onclick="toggle(70);">
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Invoke all the prerequisites of a task in parallel.
</code></li>
                
                <li class="post-context-line"><code>    def invoke_prerequisites_concurrently(task_args, invocation_chain)# :nodoc:
</code></li>
                
                <li class="post-context-line"><code>      futures = prerequisite_tasks.map do |p|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code app">
              
              <ol start="188"
                  class="pre-context" id="pre-71"
                  onclick="toggle(71);">
                
                <li class="pre-context-line"><code>    private :add_chain_to
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Invoke all the prerequisites of a task.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_prerequisites(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.always_multitask
</code></li>
                
                <li class="pre-context-line"><code>        invoke_prerequisites_concurrently(task_args, invocation_chain)
</code></li>
                
                <li class="pre-context-line"><code>      else
</code></li>
                
              </ol>
              

              <ol start="195" class="context" id="71"
                  onclick="toggle(71);">
                <li class="context-line" id="context-71"><code>        prerequisite_tasks.each { |p|</code></li>
              </ol>

              
              <ol start="196" class="post-context"
                  id="post-71" onclick="toggle(71);">
                
                <li class="post-context-line"><code>          prereq_args = task_args.new_scope(p.arg_names)
</code></li>
                
                <li class="post-context-line"><code>          p.invoke_with_call_chain(prereq_args, invocation_chain)
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Invoke all the prerequisites of a task in parallel.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>invoke_prerequisites</strong></code>
            </li>

            <li class="code app">
              
              <ol start="188"
                  class="pre-context" id="pre-72"
                  onclick="toggle(72);">
                
                <li class="pre-context-line"><code>    private :add_chain_to
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Invoke all the prerequisites of a task.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_prerequisites(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.always_multitask
</code></li>
                
                <li class="pre-context-line"><code>        invoke_prerequisites_concurrently(task_args, invocation_chain)
</code></li>
                
                <li class="pre-context-line"><code>      else
</code></li>
                
              </ol>
              

              <ol start="195" class="context" id="72"
                  onclick="toggle(72);">
                <li class="context-line" id="context-72"><code>        prerequisite_tasks.each { |p|</code></li>
              </ol>

              
              <ol start="196" class="post-context"
                  id="post-72" onclick="toggle(72);">
                
                <li class="post-context-line"><code>          prereq_args = task_args.new_scope(p.arg_names)
</code></li>
                
                <li class="post-context-line"><code>          p.invoke_with_call_chain(prereq_args, invocation_chain)
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Invoke all the prerequisites of a task in parallel.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>block in invoke_with_call_chain</strong></code>
            </li>

            <li class="code app">
              
              <ol start="167"
                  class="pre-context" id="pre-73"
                  onclick="toggle(73);">
                
                <li class="pre-context-line"><code>      new_chain = InvocationChain.append(self, invocation_chain)
</code></li>
                
                <li class="pre-context-line"><code>      @lock.synchronize do
</code></li>
                
                <li class="pre-context-line"><code>        if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>          application.trace &quot;** Invoke #{name} #{format_trace_flags}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>        return if @already_invoked
</code></li>
                
                <li class="pre-context-line"><code>        @already_invoked = true
</code></li>
                
              </ol>
              

              <ol start="174" class="context" id="73"
                  onclick="toggle(73);">
                <li class="context-line" id="context-73"><code>        invoke_prerequisites(task_args, new_chain)</code></li>
              </ol>

              
              <ol start="175" class="post-context"
                  id="post-73" onclick="toggle(73);">
                
                <li class="post-context-line"><code>        execute(task_args) if needed?
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    rescue Exception =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>      add_chain_to(ex, new_chain)
</code></li>
                
                <li class="post-context-line"><code>      raise ex
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>    protected :invoke_with_call_chain
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;rubies&#x2F;ruby-2.0.0-p247&#x2F;lib&#x2F;ruby&#x2F;2.0.0&#x2F;monitor.rb</code> in
                <code><strong>mon_synchronize</strong></code>
            </li>

            <li class="code app">
              
              <ol start="204"
                  class="pre-context" id="pre-74"
                  onclick="toggle(74);">
                
                <li class="pre-context-line"><code>  # Enters exclusive section and executes the block.  Leaves the exclusive
</code></li>
                
                <li class="pre-context-line"><code>  # section automatically when the block exits.  See example under
</code></li>
                
                <li class="pre-context-line"><code>  # +MonitorMixin+.
</code></li>
                
                <li class="pre-context-line"><code>  #
</code></li>
                
                <li class="pre-context-line"><code>  def mon_synchronize
</code></li>
                
                <li class="pre-context-line"><code>    mon_enter
</code></li>
                
                <li class="pre-context-line"><code>    begin
</code></li>
                
              </ol>
              

              <ol start="211" class="context" id="74"
                  onclick="toggle(74);">
                <li class="context-line" id="context-74"><code>      yield</code></li>
              </ol>

              
              <ol start="212" class="post-context"
                  id="post-74" onclick="toggle(74);">
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      mon_exit
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>  alias synchronize mon_synchronize
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>  #
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>invoke_with_call_chain</strong></code>
            </li>

            <li class="code app">
              
              <ol start="161"
                  class="pre-context" id="pre-75"
                  onclick="toggle(75);">
                
                <li class="pre-context-line"><code>      invoke_with_call_chain(task_args, InvocationChain::EMPTY)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Same as invoke, but explicitly pass a call chain to detect
</code></li>
                
                <li class="pre-context-line"><code>    # circular dependencies.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_with_call_chain(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="pre-context-line"><code>      new_chain = InvocationChain.append(self, invocation_chain)
</code></li>
                
              </ol>
              

              <ol start="168" class="context" id="75"
                  onclick="toggle(75);">
                <li class="context-line" id="context-75"><code>      @lock.synchronize do</code></li>
              </ol>

              
              <ol start="169" class="post-context"
                  id="post-75" onclick="toggle(75);">
                
                <li class="post-context-line"><code>        if application.options.trace
</code></li>
                
                <li class="post-context-line"><code>          application.trace &quot;** Invoke #{name} #{format_trace_flags}&quot;
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>        return if @already_invoked
</code></li>
                
                <li class="post-context-line"><code>        @already_invoked = true
</code></li>
                
                <li class="post-context-line"><code>        invoke_prerequisites(task_args, new_chain)
</code></li>
                
                <li class="post-context-line"><code>        execute(task_args) if needed?
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>invoke</strong></code>
            </li>

            <li class="code app">
              
              <ol start="154"
                  class="pre-context" id="pre-76"
                  onclick="toggle(76);">
                
                <li class="pre-context-line"><code>      @comments = []
</code></li>
                
                <li class="pre-context-line"><code>      self
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Invoke the task if it is needed.  Prerequisites are invoked first.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke(*args)
</code></li>
                
                <li class="pre-context-line"><code>      task_args = TaskArguments.new(arg_names, args)
</code></li>
                
              </ol>
              

              <ol start="161" class="context" id="76"
                  onclick="toggle(76);">
                <li class="context-line" id="context-76"><code>      invoke_with_call_chain(task_args, InvocationChain::EMPTY)</code></li>
              </ol>

              
              <ol start="162" class="post-context"
                  id="post-76" onclick="toggle(76);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Same as invoke, but explicitly pass a call chain to detect
</code></li>
                
                <li class="post-context-line"><code>    # circular dependencies.
</code></li>
                
                <li class="post-context-line"><code>    def invoke_with_call_chain(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="post-context-line"><code>      new_chain = InvocationChain.append(self, invocation_chain)
</code></li>
                
                <li class="post-context-line"><code>      @lock.synchronize do
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>invoke_task</strong></code>
            </li>

            <li class="code app">
              
              <ol start="142"
                  class="pre-context" id="pre-77"
                  onclick="toggle(77);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # private ----------------------------------------------------------------
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_task(task_string)
</code></li>
                
                <li class="pre-context-line"><code>      name, args = parse_task_string(task_string)
</code></li>
                
                <li class="pre-context-line"><code>      t = self[name]
</code></li>
                
              </ol>
              

              <ol start="149" class="context" id="77"
                  onclick="toggle(77);">
                <li class="context-line" id="context-77"><code>      t.invoke(*args)</code></li>
              </ol>

              
              <ol start="150" class="post-context"
                  id="post-77" onclick="toggle(77);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def parse_task_string(string)
</code></li>
                
                <li class="post-context-line"><code>      if string =~ &#x2F;^([^\[]+)(\[(.*)\])$&#x2F;
</code></li>
                
                <li class="post-context-line"><code>        name = $1
</code></li>
                
                <li class="post-context-line"><code>        args = $3.split(&#x2F;\s*,\s*&#x2F;)
</code></li>
                
                <li class="post-context-line"><code>      else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block (2 levels) in top_level</strong></code>
            </li>

            <li class="code app">
              
              <ol start="99"
                  class="pre-context" id="pre-78"
                  onclick="toggle(78);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      run_with_threads do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="106" class="context" id="78"
                  onclick="toggle(78);">
                <li class="context-line" id="context-78"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="107" class="post-context"
                  id="post-78" onclick="toggle(78);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Run the given block with the thread startup and shutdown.
</code></li>
                
                <li class="post-context-line"><code>    def run_with_threads
</code></li>
                
                <li class="post-context-line"><code>      thread_pool.gather_history if options.job_stats == :history
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code app">
              
              <ol start="99"
                  class="pre-context" id="pre-79"
                  onclick="toggle(79);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      run_with_threads do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="106" class="context" id="79"
                  onclick="toggle(79);">
                <li class="context-line" id="context-79"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="107" class="post-context"
                  id="post-79" onclick="toggle(79);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Run the given block with the thread startup and shutdown.
</code></li>
                
                <li class="post-context-line"><code>    def run_with_threads
</code></li>
                
                <li class="post-context-line"><code>      thread_pool.gather_history if options.job_stats == :history
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block in top_level</strong></code>
            </li>

            <li class="code app">
              
              <ol start="99"
                  class="pre-context" id="pre-80"
                  onclick="toggle(80);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      run_with_threads do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="106" class="context" id="80"
                  onclick="toggle(80);">
                <li class="context-line" id="context-80"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="107" class="post-context"
                  id="post-80" onclick="toggle(80);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Run the given block with the thread startup and shutdown.
</code></li>
                
                <li class="post-context-line"><code>    def run_with_threads
</code></li>
                
                <li class="post-context-line"><code>      thread_pool.gather_history if options.job_stats == :history
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>run_with_threads</strong></code>
            </li>

            <li class="code app">
              
              <ol start="108"
                  class="pre-context" id="pre-81"
                  onclick="toggle(81);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the given block with the thread startup and shutdown.
</code></li>
                
                <li class="pre-context-line"><code>    def run_with_threads
</code></li>
                
                <li class="pre-context-line"><code>      thread_pool.gather_history if options.job_stats == :history
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="115" class="context" id="81"
                  onclick="toggle(81);">
                <li class="context-line" id="context-81"><code>      yield</code></li>
              </ol>

              
              <ol start="116" class="post-context"
                  id="post-81" onclick="toggle(81);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      thread_pool.join
</code></li>
                
                <li class="post-context-line"><code>      if options.job_stats
</code></li>
                
                <li class="post-context-line"><code>        stats = thread_pool.statistics
</code></li>
                
                <li class="post-context-line"><code>        puts &quot;Maximum active threads: #{stats[:max_active_threads]}&quot;
</code></li>
                
                <li class="post-context-line"><code>        puts &quot;Total threads in play:  #{stats[:total_threads_in_play]}&quot;
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>top_level</strong></code>
            </li>

            <li class="code app">
              
              <ol start="93"
                  class="pre-context" id="pre-82"
                  onclick="toggle(82);">
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        raw_load_rakefile
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the top level tasks of a Rake application.
</code></li>
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
              </ol>
              

              <ol start="100" class="context" id="82"
                  onclick="toggle(82);">
                <li class="context-line" id="context-82"><code>      run_with_threads do</code></li>
              </ol>

              
              <ol start="101" class="post-context"
                  id="post-82" onclick="toggle(82);">
                
                <li class="post-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="post-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="post-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="post-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block in run</strong></code>
            </li>

            <li class="code app">
              
              <ol start="71"
                  class="pre-context" id="pre-83"
                  onclick="toggle(83);">
                
                <li class="pre-context-line"><code>    # If you wish to build a custom rake command, you should call
</code></li>
                
                <li class="pre-context-line"><code>    # +init+ on your application.  Then define any tasks.  Finally,
</code></li>
                
                <li class="pre-context-line"><code>    # call +top_level+ to run your top level tasks.
</code></li>
                
                <li class="pre-context-line"><code>    def run
</code></li>
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        init
</code></li>
                
                <li class="pre-context-line"><code>        load_rakefile
</code></li>
                
              </ol>
              

              <ol start="78" class="context" id="83"
                  onclick="toggle(83);">
                <li class="context-line" id="context-83"><code>        top_level</code></li>
              </ol>

              
              <ol start="79" class="post-context"
                  id="post-83" onclick="toggle(83);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Initialize the command line parameters and app name.
</code></li>
                
                <li class="post-context-line"><code>    def init(app_name=&#x27;rake&#x27;)
</code></li>
                
                <li class="post-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="post-context-line"><code>        @name = app_name
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>standard_exception_handling</strong></code>
            </li>

            <li class="code app">
              
              <ol start="158"
                  class="pre-context" id="pre-84"
                  onclick="toggle(84);">
                
                <li class="pre-context-line"><code>        args = []
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      [name, args]
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Provide standard exception handling for the given block.
</code></li>
                
                <li class="pre-context-line"><code>    def standard_exception_handling
</code></li>
                
              </ol>
              

              <ol start="165" class="context" id="84"
                  onclick="toggle(84);">
                <li class="context-line" id="context-84"><code>      yield</code></li>
              </ol>

              
              <ol start="166" class="post-context"
                  id="post-84" onclick="toggle(84);">
                
                <li class="post-context-line"><code>    rescue SystemExit
</code></li>
                
                <li class="post-context-line"><code>      # Exit silently with current status
</code></li>
                
                <li class="post-context-line"><code>      raise
</code></li>
                
                <li class="post-context-line"><code>    rescue OptionParser::InvalidOption =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>      $stderr.puts ex.message
</code></li>
                
                <li class="post-context-line"><code>      exit(false)
</code></li>
                
                <li class="post-context-line"><code>    rescue Exception =&gt; ex
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;lib&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>run</strong></code>
            </li>

            <li class="code app">
              
              <ol start="68"
                  class="pre-context" id="pre-85"
                  onclick="toggle(85);">
                
                <li class="pre-context-line"><code>    # * Define the tasks (+load_rakefile+).
</code></li>
                
                <li class="pre-context-line"><code>    # * Run the top level tasks (+top_level+).
</code></li>
                
                <li class="pre-context-line"><code>    #
</code></li>
                
                <li class="pre-context-line"><code>    # If you wish to build a custom rake command, you should call
</code></li>
                
                <li class="pre-context-line"><code>    # +init+ on your application.  Then define any tasks.  Finally,
</code></li>
                
                <li class="pre-context-line"><code>    # call +top_level+ to run your top level tasks.
</code></li>
                
                <li class="pre-context-line"><code>    def run
</code></li>
                
              </ol>
              

              <ol start="75" class="context" id="85"
                  onclick="toggle(85);">
                <li class="context-line" id="context-85"><code>      standard_exception_handling do</code></li>
              </ol>

              
              <ol start="76" class="post-context"
                  id="post-85" onclick="toggle(85);">
                
                <li class="post-context-line"><code>        init
</code></li>
                
                <li class="post-context-line"><code>        load_rakefile
</code></li>
                
                <li class="post-context-line"><code>        top_level
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Initialize the command line parameters and app name.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;gems&#x2F;rake-10.1.0&#x2F;bin&#x2F;rake</code> in
                <code><strong>&lt;top (required)&gt;</strong></code>
            </li>

            <li class="code system">
              
              <ol start="26"
                  class="pre-context" id="pre-86"
                  onclick="toggle(86);">
                
                <li class="pre-context-line"><code>  require &#x27;rubygems&#x27;
</code></li>
                
                <li class="pre-context-line"><code>  gem &#x27;rake&#x27;
</code></li>
                
                <li class="pre-context-line"><code>rescue LoadError
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>require &#x27;rake&#x27;
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="33" class="context" id="86"
                  onclick="toggle(86);">
                <li class="context-line" id="context-86"><code>Rake.application.run</code></li>
              </ol>

              
              <ol start="34" class="post-context"
                  id="post-86" onclick="toggle(86);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;bin&#x2F;rake</code> in
                <code><strong>load</strong></code>
            </li>

            <li class="code system">
              
              <ol start="16"
                  class="pre-context" id="pre-87"
                  onclick="toggle(87);">
                
                <li class="pre-context-line"><code>  if str =~ &#x2F;\A_(.*)_\z&#x2F;
</code></li>
                
                <li class="pre-context-line"><code>    version = $1
</code></li>
                
                <li class="pre-context-line"><code>    ARGV.shift
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>gem &#x27;rake&#x27;, version
</code></li>
                
              </ol>
              

              <ol start="23" class="context" id="87"
                  onclick="toggle(87);">
                <li class="context-line" id="context-87"><code>load Gem.bin_path(&#x27;rake&#x27;, &#x27;rake&#x27;, version)</code></li>
              </ol>

              
              <ol start="24" class="post-context"
                  id="post-87" onclick="toggle(87);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@global&#x2F;bin&#x2F;rake</code> in
                <code><strong>&lt;main&gt;</strong></code>
            </li>

            <li class="code system">
              
              <ol start="16"
                  class="pre-context" id="pre-88"
                  onclick="toggle(88);">
                
                <li class="pre-context-line"><code>  if str =~ &#x2F;\A_(.*)_\z&#x2F;
</code></li>
                
                <li class="pre-context-line"><code>    version = $1
</code></li>
                
                <li class="pre-context-line"><code>    ARGV.shift
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>gem &#x27;rake&#x27;, version
</code></li>
                
              </ol>
              

              <ol start="23" class="context" id="88"
                  onclick="toggle(88);">
                <li class="context-line" id="context-88"><code>load Gem.bin_path(&#x27;rake&#x27;, &#x27;rake&#x27;, version)</code></li>
              </ol>

              
              <ol start="24" class="post-context"
                  id="post-88" onclick="toggle(88);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;bin&#x2F;ruby_noexec_wrapper</code> in
                <code><strong>eval</strong></code>
            </li>

            <li class="code system">
              
              <ol start="7"
                  class="pre-context" id="pre-89"
                  onclick="toggle(89);">
                
                <li class="pre-context-line"><code>require &#x27;rubygems&#x27;
</code></li>
                
                <li class="pre-context-line"><code>begin
</code></li>
                
                <li class="pre-context-line"><code>  require &#x27;rubygems-bundler&#x2F;noexec&#x27;
</code></li>
                
                <li class="pre-context-line"><code>rescue LoadError
</code></li>
                
                <li class="pre-context-line"><code>  warn &quot;unable to load rubygems-bundler&#x2F;noexec&quot; if ENV.key?(&#x27;NOEXEC_DEBUG&#x27;)
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="14" class="context" id="89"
                  onclick="toggle(89);">
                <li class="context-line" id="context-89"><code>eval File.read(original_file), binding, original_file</code></li>
              </ol>

              
              <ol start="15" class="post-context"
                  id="post-89" onclick="toggle(89);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;home&#x2F;geronimo&#x2F;.rvm&#x2F;gems&#x2F;ruby-2.0.0-p247@vianda&#x2F;bin&#x2F;ruby_noexec_wrapper</code> in
                <code><strong>&lt;main&gt;</strong></code>
            </li>

            <li class="code system">
              
              <ol start="7"
                  class="pre-context" id="pre-90"
                  onclick="toggle(90);">
                
                <li class="pre-context-line"><code>require &#x27;rubygems&#x27;
</code></li>
                
                <li class="pre-context-line"><code>begin
</code></li>
                
                <li class="pre-context-line"><code>  require &#x27;rubygems-bundler&#x2F;noexec&#x27;
</code></li>
                
                <li class="pre-context-line"><code>rescue LoadError
</code></li>
                
                <li class="pre-context-line"><code>  warn &quot;unable to load rubygems-bundler&#x2F;noexec&quot; if ENV.key?(&#x27;NOEXEC_DEBUG&#x27;)
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="14" class="context" id="90"
                  onclick="toggle(90);">
                <li class="context-line" id="context-90"><code>eval File.read(original_file), binding, original_file</code></li>
              </ol>

              
              <ol start="15" class="post-context"
                  id="post-90" onclick="toggle(90);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      

      </ul>
    </div> <!-- /BACKTRACE -->

    <div id="get">
      <h3 id="get-info">GET</h3>
      
        <p class="no-data">No GET data.</p>
      
      <div class="clear"></div>
    </div> <!-- /GET -->

    <div id="post">
      <h3 id="post-info">POST</h3>
      
        <p class="no-data">No POST data.</p>
      
      <div class="clear"></div>
    </div> <!-- /POST -->

    <div id="cookies">
      <h3 id="cookie-info">COOKIES</h3>
      
        <p class="no-data">No cookie data.</p>
      
      <div class="clear"></div>
    </div> <!-- /COOKIES -->

    <div id="rack">
      <h3 id="env-info">Rack ENV</h3>
      <table class="req">
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
         
         <tr>
           <td>CONTENT_LENGTH</td>
           <td class="code"><div>0</div></td>
         </tr>
         
         <tr>
           <td>HTTPS</td>
           <td class="code"><div>off</div></td>
         </tr>
         
         <tr>
           <td>HTTP_COOKIE</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>HTTP_HOST</td>
           <td class="code"><div>example.org</div></td>
         </tr>
         
         <tr>
           <td>PATH_INFO</td>
           <td class="code"><div>&#x2F;assets&#x2F;application.js</div></td>
         </tr>
         
         <tr>
           <td>QUERY_STRING</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>REMOTE_ADDR</td>
           <td class="code"><div>127.0.0.1</div></td>
         </tr>
         
         <tr>
           <td>REQUEST_METHOD</td>
           <td class="code"><div>GET</div></td>
         </tr>
         
         <tr>
           <td>SCRIPT_NAME</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>SERVER_NAME</td>
           <td class="code"><div>example.org</div></td>
         </tr>
         
         <tr>
           <td>SERVER_PORT</td>
           <td class="code"><div>80</div></td>
         </tr>
         
         <tr>
           <td>rack.errors</td>
           <td class="code"><div>#&lt;Object:0x00000000c5d370&gt;</div></td>
         </tr>
         
         <tr>
           <td>rack.input</td>
           <td class="code"><div>#&lt;StringIO:0x00000001c8be90&gt;</div></td>
         </tr>
         
         <tr>
           <td>rack.logger</td>
           <td class="code"><div>#&lt;Logger:0x000000018031c0 @progname=nil, @level=1, @default_formatter=#&lt;Logger::Formatter:0x00000001803198 @datetime_format=nil&gt;, @formatter=nil, @logdev=#&lt;Logger::LogDevice:0x000000018030a8 @shift_size=nil, @shift_age=nil, @filename=nil, @dev=#&lt;StringIO:0x00000001cac2a8&gt;, @mutex=#&lt;Logger::LogDevice::LogDeviceMutex:0x00000001802fe0 @mon_owner=nil, @mon_count=0, @mon_mutex=#&lt;Mutex:0x00000001802d10&gt;&gt;&gt;&gt;</div></td>
         </tr>
         
         <tr>
           <td>rack.multiprocess</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.multithread</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.request.cookie_hash</td>
           <td class="code"><div>{}</div></td>
         </tr>
         
         <tr>
           <td>rack.request.cookie_string</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>rack.request.query_hash</td>
           <td class="code"><div>{}</div></td>
         </tr>
         
         <tr>
           <td>rack.request.query_string</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>rack.run_once</td>
           <td class="code"><div>false</div></td>
         </tr>
         
         <tr>
           <td>rack.test</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.url_scheme</td>
           <td class="code"><div>http</div></td>
         </tr>
         
         <tr>
           <td>rack.version</td>
           <td class="code"><div>[1, 2]</div></td>
         </tr>
         
         <tr>
           <td>sinatra.accept</td>
           <td class="code"><div>[]</div></td>
         </tr>
         
         <tr>
           <td>sinatra.commonlogger</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>sinatra.error</td>
           <td class="code"><div>#&lt;NoMethodError: undefined method `[]&#x27; for nil:NilClass&gt;</div></td>
         </tr>
         
         <tr>
           <td>sinatra.route</td>
           <td class="code"><div>GET (?-mix:^\&#x2F;assets\&#x2F;application(?:.[a-f0-9]{32})?.js$)</div></td>
         </tr>
         
      </table>
      <div class="clear"></div>
    </div> <!-- /RACK ENV -->

    <p id="explanation">You're seeing this error because you have
enabled the <code>show_exceptions</code> setting.</p>
  </div> <!-- /WRAP -->
  </body>
</html>
